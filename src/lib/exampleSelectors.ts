import type { ExampleGalleryRecord } from './formatMarkdown';

export type ExampleCategory =
  | 'all'
  | 'comedy_writing'
  | 'drama_scene'
  | 'npc_design'
  | 'reflection_prompt'
  | 'classroom_activity'
  | 'game_mechanic'
  | 'infographic_poster';

export interface ExampleCategoryOption {
  value: ExampleCategory;
  label: string;
  count: number;
}

const categoryLabels: Record<Exclude<ExampleCategory, 'all'>, string> = {
  comedy_writing: 'Comedy writing',
  drama_scene: 'Drama scene',
  npc_design: 'NPC design',
  reflection_prompt: 'Reflection prompt',
  classroom_activity: 'Classroom activity',
  game_mechanic: 'Game mechanic',
  infographic_poster: 'Infographic / poster'
};

export function formatExampleCategory(category: string): string {
  return categoryLabels[category as Exclude<ExampleCategory, 'all'>] ?? category.replace(/_/g, ' ');
}

export function findExampleById(
  examples: ExampleGalleryRecord[],
  id: string | null | undefined
): ExampleGalleryRecord | undefined {
  if (!id) return undefined;
  return examples.find(example => example.id === id);
}

export function getExamplesForFormula(
  examples: ExampleGalleryRecord[],
  formulaId: string | null | undefined
): ExampleGalleryRecord[] {
  if (!formulaId) return [];
  return examples.filter(example => example.formulaId === formulaId);
}

export function getExamplesByCategory(
  examples: ExampleGalleryRecord[],
  category: ExampleCategory
): ExampleGalleryRecord[] {
  if (category === 'all') return examples;
  return examples.filter(example => example.category === category);
}

export function getExampleCategoryOptions(examples: ExampleGalleryRecord[]): ExampleCategoryOption[] {
  const counts = new Map<Exclude<ExampleCategory, 'all'>, number>();

  for (const example of examples) {
    const category = example.category as Exclude<ExampleCategory, 'all'>;
    counts.set(category, (counts.get(category) ?? 0) + 1);
  }

  return [
    { value: 'all', label: 'All examples', count: examples.length },
    ...Array.from(counts.entries()).map(([category, count]) => ({
      value: category,
      label: formatExampleCategory(category),
      count
    }))
  ];
}

export function searchExamples(examples: ExampleGalleryRecord[], query: string): ExampleGalleryRecord[] {
  const q = query.trim().toLowerCase();
  if (!q) return examples;

  return examples.filter(example => {
    const searchableText = [
      example.id,
      example.formulaId,
      example.category,
      example.title,
      example.summary,
      example.scenario,
      example.exampleText,
      example.whyItWorks,
      example.howToUse,
      example.boundaryNote,
      example.misuseWarning,
      ...example.tags
    ].join(' ').toLowerCase();

    return searchableText.includes(q);
  });
}

export function filterExamples(
  examples: ExampleGalleryRecord[],
  query: string,
  category: ExampleCategory
): ExampleGalleryRecord[] {
  return getExamplesByCategory(searchExamples(examples, query), category);
}
