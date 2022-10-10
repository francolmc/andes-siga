import { UserEntity } from "@core/user/models/user.entity";

export default interface DeleteServiceContract {
    delete(id: number): Promise<UserEntity | null>
}