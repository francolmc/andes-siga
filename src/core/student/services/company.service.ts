import {Service} from "typedi";
import StudentServiceContract from "../contracts/service/student-service.contract";
import StudentMapper from "src/share/mappers/student.mapper";
import StudentRepository from "@infra/database/repository/student-repository";
import { StudentEntity } from "../models/student.entity";

@Service()
export default class StudentService implements StudentServiceContract {
    private readonly _mapper = new StudentMapper();

    public constructor(
            private readonly _studentRepository: StudentRepository
            ) {}

    public async createStudent(student: StudentEntity): Promise<StudentEntity | null> {
        return this._mapper.toDomain(await this._studentRepository.create(this._mapper.toRepository(student)));
    }

    public async deleteStudent(rut: string): Promise<StudentEntity | null> {
        return this._mapper.toDomain(await this._studentRepository.delete(rut));
    }

    public async editStudent(rut: string, student: StudentEntity): Promise<StudentEntity | null> {
        return this._mapper.toDomain(await  this._studentRepository.update(rut, this._mapper.toRepository(student)));
    }

    public async getAllStudents(): Promise<StudentEntity[] | null> {
        const result = await this._studentRepository.getAll();
        return result.map((item) => this._mapper.toDomain(item));
    }

    public async getOneStudentById(rut: string): Promise<StudentEntity | null> {
        return this._mapper.toDomain(await  this._studentRepository.findById(rut));
    }

}