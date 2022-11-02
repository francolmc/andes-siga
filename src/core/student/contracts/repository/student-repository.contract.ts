export default interface StudentRepositoryContract<T> {
    findById(rut: string): Promise<T | null>;
    getAll(): Promise<T[]>;
    update(rut: string, student: T): Promise<T | null>;
    create(student: T): Promise<T | null>;
    delete(rut: string): Promise<T | null>;
}