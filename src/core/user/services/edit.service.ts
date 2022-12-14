import UserRepository from "@infra/database/repository/user-repository";
import UserMapper from "../../../share/mappers/user.mapper";
import { Service } from "typedi";
import EditServiceContract from "../contracts/service/edit-service.contract";
import { UserEntity } from "../models/user.entity";
import bcrypt from 'bcrypt';

@Service()
export class EditService implements EditServiceContract {
    private _mapper = new UserMapper();

    public constructor(
        private _userRepository: UserRepository
    ) {}

    public async edit(id: number): Promise<UserEntity | null> {
        return this._mapper.ToDomain(await this._userRepository.findById(id));
    }

    public async update(id: number, user: UserEntity): Promise<UserEntity | null> {
        if (user.password != '') {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
        return this._mapper.ToDomain(await this._userRepository.update(id, this._mapper.ToRepository(user)));
    }
}