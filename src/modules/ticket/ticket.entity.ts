import { IsEmail, IsNotEmpty } from 'class-validator';
import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
} from 'typeorm';

export enum IssueType {
    PAYMENT = 'Payment',
    QUALITY = 'Quality',
    OTHER = 'Other',
}

export interface RemarkInteface {
    remark: string;
    date: string;
}

@Entity('Ticket')
export class Ticket extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @IsNotEmpty()
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

    @Column({
        type: 'array',
        default: [],
    })
    remarks: RemarkInteface[] = [];

    @Column({ default: IssueType.OTHER })
    issueType: IssueType;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @BeforeInsert()
    initialRemark() {
        const iR = {
            remark: 'Ticket Created!',
            date: new Date().toDateString(),
        };
        this.remarks.push(iR);
    }
}
