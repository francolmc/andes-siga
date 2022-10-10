import CreateServiceContract from '@core/user/contracts/service/create-service.contract';
import UserRepository from '@infra/database/repository/user-repository';
import UserMapper from '../../../share/mappers/user.mapper';
import { Service } from 'typedi';
import { UserEntity } from '../models/user.entity';
import bcrypt from 'bcrypt';

@Service()
export default class CreateService implements CreateServiceContract {
    private _mapper = new UserMapper();

    public constructor(
        private _userRepository: UserRepository
    ) {}

    public async create(user: UserEntity): Promise<UserEntity | null> {
        console.log(user);
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        user.password = await bcrypt.hash(user.password, salt);
        console.log(user.password);
        return this._mapper.ToDomain(await this._userRepository.create(this._mapper.ToRepository(user)));
    }
}