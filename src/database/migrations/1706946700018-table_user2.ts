import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser21706946700018 implements MigrationInterface {
    name = 'TableUser21706946700018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

}
