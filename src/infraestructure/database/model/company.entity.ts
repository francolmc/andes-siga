import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
    Timestamp,
    UpdateDateColumn
} from 'typeorm';
import {User} from "@infra/database/model/user.entity";

@Entity()
export default class Company extends BaseEntity {
    @PrimaryColumn()
    rut: string;

    @Column({ nullable: false })
    name: string;

    @Column()
    contactName: string;

    @Column()
    contactEmail: string;

    @Column()
    contactPhone: string;

    @Column({ nullable: false })
    isPercentage: boolean;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @OneToMany(() => User, (user) => user.company)
    users: User[];
}