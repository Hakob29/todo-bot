import { MigrationInterface, QueryRunner } from "typeorm";

export class Todo1673969207807 implements MigrationInterface {
    name = 'Todo1673969207807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Todo" ("id" BIGSERIAL NOT NULL, "chatId" character varying NOT NULL, "name" character varying NOT NULL, "right" integer NOT NULL DEFAULT '0', "wrong" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_7c134d062947a53f89064491e63" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Todo"`);
    }

}
