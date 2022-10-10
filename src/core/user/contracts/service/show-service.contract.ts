import { UserEntity } from "@core/user/models/user.entity";

export default interface ShowServiceContract {
    show(id: number): Promise<UserEntity | null>;
}