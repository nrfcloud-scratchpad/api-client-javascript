/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Describes the status of the system.
 */
export type Status = VersionedContext & {
  /**
   * Whether the system is in maintenance mode.
   */
  maintenance: boolean;
  /**
   * The global version of the system. This is merely a logical version identifier for the system as whole since individual services may have their own version scheme. This is a semantic version string: http://semver.org/
   */
  version: string;
  /**
   * Time of the status creation.
   */
  time: string;
};

/**
 * All entities require a 'context' which explicitly types their JSON representation. The version is used to express schema changes per entity.
 */
export interface VersionedContext {
  /**
   * context for this model
   */
  $context: string;
  /**
   * version of the context
   */
  $contextVersion: number;
}
