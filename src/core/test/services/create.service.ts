import CreateServiceContract from '@core/test/contracts/service/create-service.contract';
import UserRepository from '@infra/database/repository/user-repository';
import UserMapper from '../../../share/mappers/user.mapper';
import { Service } from 'typedi';
import { UserEntity } from '../models/user.entity';

@Service()
export default class CreateService implements CreateServiceContract {
    private _mapper = new UserMapper();

    public constructor(
        private _userRepository: UserRepository
    ) {}

    public async create(user: UserEntity): Promise<UserEntity | null> {
        return this._mapper.ToDomain(await this._userRepository.create(this._mapper.ToRepository(user)));
    }
}