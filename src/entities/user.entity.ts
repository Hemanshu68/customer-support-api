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
import * as bcrypt from 'bcrypt';

export enum UserRole {
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
}

@Entity({ name: 'user' })
export class User extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
        name: 'role',
        type: 'enum',
        enum: UserRole,
        default: UserRole.MEMBER,
    })
    role: UserRole;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }

    @BeforeInsert()
    setRole() {
        this.role = UserRole[this.role?.toUpperCase()] || UserRole.MEMBER;
    }
}
