import {RolEntity} from "@core/rol/models/rol.entity";
import { StudentEntity } from "@core/student/models/student.entity";

export default class StudentMapper {
    public toDomain(student: any): StudentEntity {
        return {
            rut: student.rut,
            firstName: student.firstName,
            lastName: student.lastName,
            mothersLastName: student.mothersLastName,
            licenseNumber: student.licenseNumber,
            licenseExpiration: student.licenseExpiration
        };
    }

    public toRepository(student: StudentEntity): any {
        return {
            rut: student.rut,
            firstName: student.firstName,
            lastName: student.lastName,
            mothersLastName: student.mothersLastName,
            licenseNumber: student.licenseNumber,
            licenseExpiration: student.licenseExpiration
        };
    }

    public toDto(student: StudentEntity): any {
        return {
            rut: student.rut,
            firstName: student.firstName,
            lastName: student.lastName,
            mothersLastName: student.mothersLastName,
            licenseNumber: student.licenseNumber,
            licenseExpiration: student.licenseExpiration
        };
    }
}