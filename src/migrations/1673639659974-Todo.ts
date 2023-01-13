import { MigrationInterface, QueryRunner } from "typeorm";

export class Todo1673639659974 implements MigrationInterface {
    name = 'Todo1673639659974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Todo" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "isCompleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_7c134d062947a53f89064491e63" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Todo"`);
    }

}
