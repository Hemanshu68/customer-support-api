import { IsEmail, IsNotEmpty } from 'class-validator';
import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum IssueType {
    PAYMENT = 'Payment',
    QUALITY = 'Quality',
    OTHER = 'Other',
}

@Entity('Ticket')
export class Ticket extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    ticketId: number;

    @IsNotEmpty()
    @Column()
    name: string;

    @IsNotEmpty()
    @Column()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Column()
    description: string;

    @Column({
        type: 'boolean',
        default: true,
    })
    isActive: boolean = true;

    @Column({ default: IssueType.OTHER })
    issueType: IssueType;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
