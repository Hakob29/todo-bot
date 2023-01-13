import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Todo")
export class Todo {

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ default: false })
    isCompleted: Boolean;
}