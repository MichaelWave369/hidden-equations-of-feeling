export type RelationshipType =
  | 'mirror'
  | 'buffer'
  | 'amplifier'
  | 'repair_path'
  | 'contrast'
  | 'sequence'
  | 'family_bridge'
  | 'example_pair';

export type RelationshipStrength = 'low' | 'medium' | 'high';

export interface CrossReferenceEdge {
  source: string;
  target: string;
  relationship: RelationshipType;
  label: string;
  strength: RelationshipStrength;
  recommendedForCompare: boolean;
  boundaryNote?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  formulaIds: string[];
  boundaryNote: string;
}

export interface CrossReferenceMap {
  meta: {
    title: string;
    version: string;
    boundary: string;
  };
  relationshipTypes: Record<RelationshipType, string>;
  edges: CrossReferenceEdge[];
  learningPaths: LearningPath[];
}

const relationshipPriority: Record<RelationshipStrength, number> = {
  high: 3,
  medium: 2,
  low: 1
};

export function getRecommendedComparePairs(map: CrossReferenceMap): CrossReferenceEdge[] {
  return [...map.edges]
    .filter(edge => edge.recommendedForCompare)
    .sort((a, b) => relationshipPriority[b.strength] - relationshipPriority[a.strength]);
}

export function getRelationshipsForCard(map: CrossReferenceMap, cardId: string): CrossReferenceEdge[] {
  if (!cardId) return [];

  return [...map.edges]
    .filter(edge => edge.source === cardId || edge.target === cardId)
    .sort((a, b) => relationshipPriority[b.strength] - relationshipPriority[a.strength]);
}

export function findRelationship(
  map: CrossReferenceMap,
  sourceId: string,
  targetId: string
): CrossReferenceEdge | undefined {
  return map.edges.find(edge =>
    (edge.source === sourceId && edge.target === targetId) ||
    (edge.source === targetId && edge.target === sourceId)
  );
}

export function getLearningPathsForCard(map: CrossReferenceMap, cardId: string): LearningPath[] {
  if (!cardId) return [];
  return map.learningPaths.filter(path => path.formulaIds.includes(cardId));
}

export function getOtherFormulaId(edge: CrossReferenceEdge, cardId: string): string | null {
  if (edge.source === cardId) return edge.target;
  if (edge.target === cardId) return edge.source;
  return null;
}

export function getRelationshipDescription(map: CrossReferenceMap, relationship: RelationshipType): string {
  return map.relationshipTypes[relationship] ?? relationship;
}

export function formatRelationshipType(relationship: RelationshipType): string {
  return relationship.replace(/_/g, ' ');
}

export function getCompareBoundaryText(map: CrossReferenceMap): string {
  return map.meta.boundary || 'This comparison shows symbolic design relationships, not psychological measurements.';
}
