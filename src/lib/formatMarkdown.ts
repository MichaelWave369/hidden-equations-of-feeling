import type { FormulaCard } from '../types/formula';

export const PUBLIC_BOUNDARY_LINE = 'Boundary: symbolic design pattern only — not diagnosis, measurement, or universal law.';

export interface ExampleGalleryRecord {
  id: string;
  formulaId: string;
  category: string;
  title: string;
  summary: string;
  scenario: string;
  exampleText: string;
  whyItWorks: string;
  howToUse: string;
  boundaryNote: string;
  misuseWarning: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'advanced';
  version: string;
  status: string;
}

function bulletList(items: string[] | undefined): string {
  if (!items?.length) return '- none listed';
  return items.map(item => `- ${item}`).join('\n');
}

function variableTable(card: FormulaCard): string {
  const rows = card.variables.map(variable => `| ${variable.symbol} | ${variable.meaning} | ${variable.role} |`);

  return [
    '| Symbol | Meaning | Role |',
    '|---|---|---|',
    ...rows
  ].join('\n');
}

export function formatFormulaLine(card: FormulaCard): string {
  return `${card.title}: ${card.formula}`;
}

export function formatReflectionPromptMarkdown(card: FormulaCard): string {
  return [
    `# ${card.title} — Reflection Prompt`,
    '',
    `Formula: \`${card.formula}\``,
    '',
    card.reflectionPrompt,
    '',
    PUBLIC_BOUNDARY_LINE,
    card.boundaryNote ? `Card note: ${card.boundaryNote}` : ''
  ]
    .filter(Boolean)
    .join('\n');
}

export function formatFormulaMarkdown(card: FormulaCard): string {
  return [
    `# ${card.title}`,
    '',
    `Family: ${card.familyLabel}`,
    '',
    `Formula: \`${card.formula}\``,
    '',
    `Plain language: ${card.formulaPlaintext}`,
    '',
    `Tagline: ${card.tagline}`,
    '',
    '## Variables',
    '',
    variableTable(card),
    '',
    '## Reflection prompt',
    '',
    card.reflectionPrompt,
    '',
    '## Use cases',
    '',
    bulletList(card.useCases),
    '',
    '## Example application',
    '',
    card.exampleApplication,
    '',
    '## Boundary',
    '',
    PUBLIC_BOUNDARY_LINE,
    card.boundaryNote,
    '',
    '## Misuse warning',
    '',
    card.misuseWarning
  ].join('\n');
}

export function formatExampleMarkdown(example: ExampleGalleryRecord, formulaTitle?: string): string {
  return [
    `# ${example.title}`,
    '',
    `Category: ${example.category}`,
    `Formula: ${formulaTitle ?? example.formulaId}`,
    '',
    `Summary: ${example.summary}`,
    '',
    '## Scenario',
    '',
    example.scenario,
    '',
    '## Example',
    '',
    example.exampleText,
    '',
    '## Why it works',
    '',
    example.whyItWorks,
    '',
    '## How to use',
    '',
    example.howToUse,
    '',
    '## Boundary',
    '',
    PUBLIC_BOUNDARY_LINE,
    example.boundaryNote,
    '',
    '## Misuse warning',
    '',
    example.misuseWarning,
    '',
    `Tags: ${example.tags.join(', ')}`
  ].join('\n');
}

export function formatCitationSnippet(card: FormulaCard): string {
  return [
    `${card.title}. The Hidden Equations of Feeling.`,
    `Formula: ${card.formula}.`,
    PUBLIC_BOUNDARY_LINE
  ].join(' ');
}
