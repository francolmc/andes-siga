import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    Timestamp,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export default class Student extends BaseEntity {
    @PrimaryColumn({ type: 'varchar', length: 12 })
    rut: string;

    @Column({ nullable: false })
    firstName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ nullable: false })
    mothersLastName: string;

    @Column()
    licenseNumber: string;

    @Column()
    licenseExpiration: Date;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}