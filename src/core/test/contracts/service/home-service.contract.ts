import { UserEntity } from "@core/test/models/user.entity";

export default interface HomeServiceContract {
    showAllUsers(): Promise<UserEntity[]>;
}