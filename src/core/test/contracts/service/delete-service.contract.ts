import { UserEntity } from "@core/test/models/user.entity";

export default interface DeleteServiceContract {
    delete(id: number): Promise<UserEntity | null>
}