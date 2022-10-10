import UserRepository from "@infra/database/repository/user-repository";
import UserMapper from "../../../share/mappers/user.mapper";
import { Service } from "typedi";
import HomeServiceContract from "../contracts/service/home-service.contract";
import { UserEntity } from "../models/user.entity";

@Service()
export class HomeService implements HomeServiceContract {
    private _mapper = new UserMapper();

    public constructor(
        private _userRepository: UserRepository
    ){}

    public async showAllUsers(): Promise<UserEntity[]> {
        const result = await this._userRepository.getAll();
        return result.map((item) => this._mapper.ToDomain(item));
    }
}