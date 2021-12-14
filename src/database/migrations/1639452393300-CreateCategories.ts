import { MigrationInterface, QueryRunner, Table } from "typeorm";
/* yarn typeorm migration:create -n CreateCategories */

export class CreateCategories1639452393300 implements MigrationInterface {
  /** Método para realizar a alteração desejada no banco de adados
   Aqui, estamos criando nossa tabela de actegorias
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "name", type: "varchar" },
          { name: "description", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" }
        ]
      })
    );
  }

  /* função para desfazer alterações realizadas na propria migration */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }

}
