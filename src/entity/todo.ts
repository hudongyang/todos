import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity';

@Entity({
    name: 'todos'
})
export default abstract class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    completed?: boolean;

    @Column()
    title?: string;
}