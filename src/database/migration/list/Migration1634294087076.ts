import { Migration } from '@mikro-orm/migrations';

export class Migration1634294087076 extends Migration {
  async up(): Promise<void> {
    const knex = this.getKnex();
    this.addSql(
      knex.schema
        .createTable('edge_carrier_access_level', (tableBuilder) => {
        tableBuilder.increments().primary();
        tableBuilder.string('nickname').notNullable();
        tableBuilder.integer('owner_id').unsigned().notNullable();
        })
        .toQuery(),
    );
  }
}
