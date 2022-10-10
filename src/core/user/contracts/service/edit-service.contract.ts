import { UserEntity } from "@core/user/models/user.entity";

export default interface EditServiceContract {
    edit(id: number): Promise<UserEntity | null>;
    update(id: number, user: UserEntity): Promise<UserEntity | null>;
}