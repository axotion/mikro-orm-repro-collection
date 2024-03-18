import { Migration } from '@mikro-orm/migrations';

export class Migration1634293637100 extends Migration {
  async up(): Promise<void> {
    const knex = this.getKnex();
    this.addSql(
      knex.schema
        .createTable('cat', (tableBuilder) => {
          tableBuilder.increments().primary();
          tableBuilder.string('nickname').notNullable();
          tableBuilder.integer('owner_id').unsigned().notNullable();
        })
        .toQuery(),
    );
  }
}
