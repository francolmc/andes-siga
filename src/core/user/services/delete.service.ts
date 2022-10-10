import UserRepository from "@infra/database/repository/user-repository";
import UserMapper from "../../../share/mappers/user.mapper";
import { Service } from "typedi";
import DeleteServiceContract from "../contracts/service/delete-service.contract";
import { UserEntity } from "../models/user.entity";

@Service()
export default class DeleteService implements DeleteServiceContract {
    private _mapper = new UserMapper();

    public constructor(
        private _userRepository: UserRepository
    ) {}

    public async delete(id: number): Promise<UserEntity | null> {
        return this._mapper.ToDomain(await this._userRepository.delete(id));
    }
}