import { UserEntity } from "@core/test/models/user.entity";

export default interface ShowServiceContract {
    show(id: number): Promise<UserEntity | null>;
}