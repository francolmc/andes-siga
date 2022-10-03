import UserRepository from "@infra/database/repository/user-repository";
import UserMapper from "../../../share/mappers/user.mapper";
import { Service } from "typedi";
import ShowServiceContract from "../contracts/service/show-service.contract";
import { UserEntity } from "../models/user.entity";

@Service()
export class ShowService implements ShowServiceContract {
    private _mapper = new UserMapper();

    public constructor(
        private _userRepository: UserRepository
    ) {}

    public async show(id: number): Promise<UserEntity | null> {
        return this._mapper.ToDomain(await this._userRepository.findById(id));
    }
}