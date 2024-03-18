import { Migration } from "@mikro-orm/migrations";


export class Migration1634293166534 extends Migration {
  async up(): Promise<void> {
    const knex = this.getKnex();
    this.addSql(
      knex.schema
        .createTable('owner', (tableBuilder) => {
          tableBuilder.increments().primary();
          tableBuilder.string('name');
        })
        .toQuery(),
    );
  }
}
