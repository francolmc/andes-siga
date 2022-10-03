import { UserEntity } from "../../core/test/models/user.entity";

export default class UserMapper {
    public ToDomain(user: any): UserEntity {
        const userEntity: UserEntity = {
            id: user.id || undefined,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age
        };

        return userEntity;
    }

    public ToRepository(user: UserEntity): any {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age
        };
    }

    public ToDto(user: UserEntity): any {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age
        }
    }
}