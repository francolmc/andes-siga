import {Service} from "typedi";
import {Repository} from "typeorm";
import AppDataSource from "@infra/database/data-source";
import StudentRepositoryContract from "@core/student/contracts/repository/student-repository.contract";
import Student from "../model/student.entity";

@Service()
export default class StudentRepository implements StudentRepositoryContract<Student> {
    private _studentRepository: Repository<Student> = AppDataSource.getRepository(Student);

    public  async create(student: Student): Promise<Student | null> {
        return await this._studentRepository.save(student);
    }

    public async delete(rut: string): Promise<Student | null> {
        const localStudent: Student | null = await this.findById(rut);
        if (!localStudent) return null;
        return await this._studentRepository.remove(localStudent);
    }

    public async findById(rut: string): Promise<Student | null> {
        return await  this._studentRepository.findOneBy({ rut })
    }

    public async getAll(): Promise<Student[]> {
        return await this._studentRepository.find();
    }

    public async update(rut: string, student: Student): Promise<Student | null> {
        const localStudent: Student | null = await this.findById(rut);
        if (!localStudent) return null;
        localStudent.firstName = student.firstName;
        localStudent.lastName = student.lastName;
        localStudent.mothersLastName = student.mothersLastName;
        localStudent.licenseExpiration = student.licenseExpiration;
        localStudent.licenseNumber = student.licenseNumber;
        return await this._studentRepository.save(localStudent);
    }

}