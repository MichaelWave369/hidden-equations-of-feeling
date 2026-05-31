import fs from 'node:fs';

const cards = JSON.parse(fs.readFileSync('src/data/formula_cards.json', 'utf8'));
const required = ['id','title','family','formula','formulaPlaintext','formulaSymbols','variables','tagline','reflectionPrompt','boundaryNote','misuseWarning','version'];
let errors = [];
const ids = new Set();

for (const card of cards) {
  for (const key of required) {
    if (card[key] === undefined || card[key] === null || card[key] === '') errors.push(`${card.id ?? 'unknown'} missing ${key}`);
  }
  if (ids.has(card.id)) errors.push(`duplicate id ${card.id}`);
  ids.add(card.id);
  const variableSymbols = new Set((card.variables ?? []).map(v => v.symbol));
  for (const sym of card.formulaSymbols ?? []) {
    if (!variableSymbols.has(sym)) errors.push(`${card.id} formulaSymbols includes ${sym} but variables does not define it`);
  }
  for (const ref of card.crossReferences ?? []) {
    if (!cards.some(c => c.id === ref)) errors.push(`${card.id} references missing card ${ref}`);
  }
}

if (errors.length) {
  console.error('Formula data validation failed:');
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}
console.log(`Formula data validation passed for ${cards.length} cards.`);
