import { MigrationObject } from "@mikro-orm/core";
import { Migration1634293166534 } from './Migration1634293166534';
import { Migration1634293637100 } from './Migration1634293637100';
import { Migration1634294087076 } from './Migration1634294087076';

export const migrations = [
  Migration1634293166534,
  Migration1634293637100,
  Migration1634294087076,
].map((migration) => ({
    name: migration.name,
    class: migration
})) as MigrationObject[]
