import {CompanyEntity} from "@core/company/models/company.entity";

export default interface CompanyServiceContract {
    getOneCompanyById(rut: string): Promise<CompanyEntity | null>;
    getAllCompanies(): Promise<CompanyEntity[] | null>;
    createCompany(company: CompanyEntity): Promise<CompanyEntity | null>;
    editCompany(rut: string, company: CompanyEntity): Promise<CompanyEntity | null>;
    deleteCompany(rut: string): Promise<CompanyEntity | null>;
}