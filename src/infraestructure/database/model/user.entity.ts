import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, ManyToOne,
    PrimaryGeneratedColumn,
    Timestamp,
    UpdateDateColumn
} from "typeorm";
import Rol from "@infra/database/model/rol.entity";
import Company from "./company.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: "varchar", length: 250 })
    password: string

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @ManyToOne(() => Rol, (rol) => rol.users)
    rol: Rol

    @ManyToOne(() => Company, (company) => company.users)
    company: Company
}