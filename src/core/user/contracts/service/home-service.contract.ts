import { UserEntity } from "@core/user/models/user.entity";

export default interface HomeServiceContract {
    showAllUsers(): Promise<UserEntity[]>;
}