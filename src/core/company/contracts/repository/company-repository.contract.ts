export default interface CompanyRepositoryContract<T> {
    findById(rut: string): Promise<T | null>;
    getAll(): Promise<T[]>;
    update(rut: string, company: T): Promise<T | null>;
    create(company: T): Promise<T | null>;
    delete(rut: string): Promise<T | null>;
}