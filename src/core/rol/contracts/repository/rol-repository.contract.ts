export default interface RolRepositoryContract<T> {
    findById(id: number): Promise<T | null>;
    getAll(): Promise<T[]>;
    update(id: number, rol: T): Promise<T | null>;
    create(rol: T): Promise<T | null>;
    delete(id: number): Promise<T | null>;
}