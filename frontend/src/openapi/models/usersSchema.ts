/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.1
 */
import type { UserSchema } from './userSchema';
import type { RoleSchema } from './roleSchema';

export interface UsersSchema {
    users: UserSchema[];
    rootRoles?: RoleSchema[];
}