import fs from 'node:fs';

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

const cards = readJson('src/data/formula_cards.json');
const examplesPath = 'src/data/example_gallery.json';
const examples = fs.existsSync(examplesPath) ? readJson(examplesPath) : [];

const errors = [];

function requireFields(record, required, label) {
  for (const key of required) {
    if (record[key] === undefined || record[key] === null || record[key] === '') {
      errors.push(`${label} ${record.id ?? 'unknown'} missing ${key}`);
    }
  }
}

function validateFormulaCards() {
  const required = ['id','title','family','formula','formulaPlaintext','formulaSymbols','variables','tagline','reflectionPrompt','boundaryNote','misuseWarning','version'];
  const ids = new Set();

  for (const card of cards) {
    requireFields(card, required, 'formula card');

    if (ids.has(card.id)) errors.push(`duplicate formula card id ${card.id}`);
    ids.add(card.id);

    const variableSymbols = new Set((card.variables ?? []).map(v => v.symbol));
    const hasOutput = (card.variables ?? []).some(v => v.role === 'output');

    if (!hasOutput) errors.push(`${card.id} must define at least one output variable`);

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

const formulaIds = validateFormulaCards();
validateExampleGallery(formulaIds);

if (errors.length) {
  console.error('Data validation failed:');
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}

console.log(`Formula data validation passed for ${cards.length} cards.`);
console.log(`Example gallery validation passed for ${examples.length} examples.`);
