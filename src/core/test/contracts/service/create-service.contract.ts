import { UserEntity } from "@core/test/models/user.entity";

export default interface CreateServiceContract {
    create(user: UserEntity): Promise<UserEntity | null>
}