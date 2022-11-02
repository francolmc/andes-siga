import { StudentEntity } from "@core/student/models/student.entity";

export default interface StudentServiceContract {
    getOneStudentById(rut: string): Promise<StudentEntity | null>;
    getAllStudents(): Promise<StudentEntity[] | null>;
    createStudent(student: StudentEntity): Promise<StudentEntity | null>;
    editStudent(rut: string, student: StudentEntity): Promise<StudentEntity | null>;
    deleteStudent(rut: string): Promise<StudentEntity | null>;
}