import { UserEntity } from "@core/user/models/user.entity";

export default interface CreateServiceContract {
    create(user: UserEntity): Promise<UserEntity | null>
}