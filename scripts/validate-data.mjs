import fs from 'node:fs';

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

const cards = readJson('src/data/formula_cards.json');
const examplesPath = 'src/data/example_gallery.json';
const examples = fs.existsSync(examplesPath) ? readJson(examplesPath) : [];
const crossReferencePath = 'src/data/cross_reference_map.json';
const crossReferenceMap = fs.existsSync(crossReferencePath) ? readJson(crossReferencePath) : null;

const errors = [];

function requireFields(record, required, label) {
  for (const key of required) {
    if (record[key] === undefined || record[key] === null || record[key] === '') {
      errors.push(`${label} ${record.id ?? record.title ?? 'unknown'} missing ${key}`);
    }
  }
}

function requireNonEmptyArray(record, key, label) {
  if (!Array.isArray(record[key]) || record[key].length === 0) {
    errors.push(`${label} ${record.id ?? record.title ?? 'unknown'} must include non-empty ${key}`);
  }
}

function validateHexColor(value, label) {
  if (typeof value !== 'string' || !/^#[0-9A-Fa-f]{6}$/.test(value)) {
    errors.push(`${label} familyColor must be a 6-digit hex color like #F4C95D`);
  }
}

function validateFormulaCards() {
  const required = [
    'id',
    'title',
    'family',
    'familyLabel',
    'familyColor',
    'formula',
    'formulaPlaintext',
    'formulaSymbols',
    'variables',
    'tagline',
    'derivation',
    'reflectionPrompt',
    'exampleApplication',
    'useCases',
    'boundaryNote',
    'misuseWarning',
    'version'
  ];
  const ids = new Set();

  for (const card of cards) {
    requireFields(card, required, 'formula card');
    requireNonEmptyArray(card, 'formulaSymbols', 'formula card');
    requireNonEmptyArray(card, 'variables', 'formula card');
    requireNonEmptyArray(card, 'useCases', 'formula card');

    if (card.familyColor) validateHexColor(card.familyColor, `formula card ${card.id}`);

    if (ids.has(card.id)) errors.push(`duplicate formula card id ${card.id}`);
    ids.add(card.id);

    const variableSymbols = new Set((card.variables ?? []).map(v => v.symbol));
    const hasOutput = (card.variables ?? []).some(v => v.role === 'output');

    if (!hasOutput) errors.push(`${card.id} must define at least one output variable`);

    for (const variable of card.variables ?? []) {
      requireFields(variable, ['symbol', 'meaning', 'role'], `variable in ${card.id}`);
    }

    for (const sym of card.formulaSymbols ?? []) {
      if (!variableSymbols.has(sym)) errors.push(`${card.id} formulaSymbols includes ${sym} but variables does not define it`);
    }

    for (const ref of card.crossReferences ?? []) {
      if (!cards.some(c => c.id === ref)) errors.push(`${card.id} references missing card ${ref}`);
    }
  }

  return ids;
}

function validateExampleGallery(formulaIds) {
  const required = [
    'id',
    'formulaId',
    'category',
    'title',
    'summary',
    'scenario',
    'exampleText',
    'whyItWorks',
    'howToUse',
    'boundaryNote',
    'misuseWarning',
    'tags',
    'difficulty',
    'version',
    'status'
  ];
  const allowedCategories = new Set([
    'comedy_writing',
    'drama_scene',
    'npc_design',
    'reflection_prompt',
    'classroom_activity',
    'game_mechanic',
    'infographic_poster'
  ]);
  const allowedDifficulties = new Set(['easy', 'medium', 'advanced']);
  const allowedStatuses = new Set(['candidate', 'draft', 'review', 'stable', 'deprecated']);
  const ids = new Set();

  for (const example of examples) {
    requireFields(example, required, 'example');

    if (ids.has(example.id)) errors.push(`duplicate example id ${example.id}`);
    ids.add(example.id);

    if (example.id && !/^example_[a-z0-9_]+$/.test(example.id)) {
      errors.push(`${example.id} must start with example_ and use lowercase letters, numbers, and underscores only`);
    }

    if (example.formulaId && !formulaIds.has(example.formulaId)) {
      errors.push(`${example.id} references missing formulaId ${example.formulaId}`);
    }

    if (example.category && !allowedCategories.has(example.category)) {
      errors.push(`${example.id} has invalid category ${example.category}`);
    }

    if (example.difficulty && !allowedDifficulties.has(example.difficulty)) {
      errors.push(`${example.id} has invalid difficulty ${example.difficulty}`);
    }

    if (example.status && !allowedStatuses.has(example.status)) {
      errors.push(`${example.id} has invalid status ${example.status}`);
    }

    if (!Array.isArray(example.tags) || example.tags.length === 0) {
      errors.push(`${example.id} must include at least one tag`);
    }
  }
}

function validateCrossReferenceMap(formulaIds) {
  if (!crossReferenceMap) return;

  const allowedRelationships = new Set([
    'mirror',
    'buffer',
    'amplifier',
    'repair_path',
    'contrast',
    'sequence',
    'family_bridge',
    'example_pair'
  ]);
  const allowedStrengths = new Set(['low', 'medium', 'high']);
  const requiredRelationshipTypes = [...allowedRelationships];

  if (!crossReferenceMap.meta) errors.push('cross-reference map missing meta');
  else requireFields(crossReferenceMap.meta, ['title', 'version', 'boundary'], 'cross-reference meta');

  if (!crossReferenceMap.relationshipTypes) errors.push('cross-reference map missing relationshipTypes');
  else {
    for (const type of requiredRelationshipTypes) {
      if (!crossReferenceMap.relationshipTypes[type]) errors.push(`cross-reference relationshipTypes missing ${type}`);
    }
  }

  const edgeKeys = new Set();
  for (const edge of crossReferenceMap.edges ?? []) {
    requireFields(edge, ['source', 'target', 'relationship', 'label', 'strength', 'recommendedForCompare'], 'cross-reference edge');

    const edgeKey = `${edge.source}->${edge.target}:${edge.relationship}`;
    if (edgeKeys.has(edgeKey)) errors.push(`duplicate cross-reference edge ${edgeKey}`);
    edgeKeys.add(edgeKey);

    if (edge.source && !formulaIds.has(edge.source)) errors.push(`cross-reference edge source missing formula ${edge.source}`);
    if (edge.target && !formulaIds.has(edge.target)) errors.push(`cross-reference edge target missing formula ${edge.target}`);
    if (edge.relationship && !allowedRelationships.has(edge.relationship)) errors.push(`cross-reference edge ${edgeKey} has invalid relationship ${edge.relationship}`);
    if (edge.strength && !allowedStrengths.has(edge.strength)) errors.push(`cross-reference edge ${edgeKey} has invalid strength ${edge.strength}`);
    if (typeof edge.recommendedForCompare !== 'boolean') errors.push(`cross-reference edge ${edgeKey} recommendedForCompare must be boolean`);
  }

  const pathIds = new Set();
  for (const path of crossReferenceMap.learningPaths ?? []) {
    requireFields(path, ['id', 'title', 'description', 'formulaIds', 'boundaryNote'], 'learning path');

    if (pathIds.has(path.id)) errors.push(`duplicate learning path id ${path.id}`);
    pathIds.add(path.id);

    if (!Array.isArray(path.formulaIds) || path.formulaIds.length < 2) {
      errors.push(`learning path ${path.id} must include at least two formulaIds`);
    }

    for (const formulaId of path.formulaIds ?? []) {
      if (!formulaIds.has(formulaId)) errors.push(`learning path ${path.id} references missing formula ${formulaId}`);
    }
  }
}

const formulaIds = validateFormulaCards();
validateExampleGallery(formulaIds);
validateCrossReferenceMap(formulaIds);

if (errors.length) {
  console.error('Data validation failed:');
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}

console.log(`Formula data validation passed for ${cards.length} cards.`);
console.log(`Example gallery validation passed for ${examples.length} examples.`);
if (crossReferenceMap) {
  console.log(`Cross-reference map validation passed for ${crossReferenceMap.edges.length} edges and ${crossReferenceMap.learningPaths.length} learning paths.`);
}
