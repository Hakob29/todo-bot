import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Todo")
export class Todo {

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column({ nullable: false })
    chatId: string

    @Column({ default: "New User" })
    name: string;

    @Column({ default: 0 })
    right: number;

    @Column({ default: 0 })
    wrong: number;
}