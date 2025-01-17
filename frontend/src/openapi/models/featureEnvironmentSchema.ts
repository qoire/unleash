/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { FeatureStrategySchema } from './featureStrategySchema';
import type { VariantSchema } from './variantSchema';

export interface FeatureEnvironmentSchema {
    name: string;
    featureName?: string;
    environment?: string;
    type?: string;
    enabled: boolean;
    sortOrder?: number;
    variantCount?: number;
    strategies?: FeatureStrategySchema[];
    variants?: VariantSchema[];
}
