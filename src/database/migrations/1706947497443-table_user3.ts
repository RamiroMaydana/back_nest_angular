import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser31706947497443 implements MigrationInterface {
    name = 'TableUser31706947497443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
