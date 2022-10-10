import UserRepositoryContract from "@core/user/contracts/repository/user-repository.contract";
import { Service } from "typedi";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { User } from "../model/user.entity";

@Service()
export default class UserRepository implements UserRepositoryContract<User> {
    private _userRepository: Repository<User> = AppDataSource.getRepository(User);

    public async searchUserByEmail(email: string): Promise<User | null> {
        return await this._userRepository.findOneBy({ email });  
    }

    public async findById(id: number): Promise<User | null> {
        return await this._userRepository.findOneBy({ id });
    }
    
    public async getAll(): Promise<User[]> {
        return await this._userRepository.find();
    }
    
    public async update(id: number, user: User): Promise<User | null> {
        const localUser: User | null = await this.findById(id);
        if (!localUser) return null;
        localUser.firstName = user.firstName;
        localUser.lastName = user.lastName;
        localUser.email = user.email;
        localUser.password = user.password;
        return await this._userRepository.save(localUser);
    }

    public async create(user: User): Promise<User | null> {
        return await this._userRepository.save(user);
    }

    public async delete(id: number): Promise<User | null> {
        const localUser: User | null = await this.findById(id);
        if (!localUser) return null;
        return this._userRepository.remove(localUser);
    }
}