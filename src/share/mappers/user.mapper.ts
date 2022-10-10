import { UserEntity } from "../../core/user/models/user.entity";

export default class UserMapper {
    public ToDomain(user: any): UserEntity {
        const userEntity: UserEntity = {
            id: user.id || undefined,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        };

        return userEntity;
    }

    public ToRepository(user: UserEntity): any {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        };
    }

    public ToDto(user: UserEntity): any {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        }
    }
}