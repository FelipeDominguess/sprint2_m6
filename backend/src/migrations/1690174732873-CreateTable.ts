import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1690174732873 implements MigrationInterface {
    name = 'CreateTable1690174732873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "registrationDate" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "registrationDate"`);
    }

}
