import {Column, Entity, PrimaryColumn} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity';

@Entity({
    name: 'todos'
})
export default class Todo extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    completed: boolean;

    @Column()
    title: string;
}