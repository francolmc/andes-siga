export default interface UserRepositoryContract<T> {
    findById(id: number): Promise<T | null>;
    getAll(): Promise<T[]>;
    update(id: number, user: T): Promise<T | null>;
    create(user: T): Promise<T | null>;
    delete(id: number): Promise<T | null>;
}