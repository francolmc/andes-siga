import UserRepository from "@infra/database/repository/user-repository";
import { Service } from "typedi";
import bcrypt from 'bcrypt';
import UserMapper from "src/share/mappers/user.mapper";

@Service()
export class ValidateService {
    constructor(
        private _userRepository: UserRepository
    ) {}

    private _mapper = new UserMapper();

    public async validateUser(email:string, password: string): Promise<boolean> {
        const result = await this._userRepository.searchUserByEmail(email);
        if (!result) return false;
        const user = this._mapper.ToDomain(result);
        return await bcrypt.compare(password, user.password);
    }
}