import {Service} from "typedi";
import CompanyServiceContract from "@core/company/contracts/service/company-service.contract";
import {CompanyEntity} from "@core/company/models/company.entity";
import CompantMapper from "../../../share/mappers/rol.mapper";
import CompanyRepository from "@infra/database/repository/company-repository";

@Service()
export default class CompanyService implements CompanyServiceContract {
    private readonly _mapper = new CompantMapper();

    public constructor(
            private readonly _companyRepository: CompanyRepository
            ) {}

    public async createCompany(company: CompanyEntity): Promise<CompanyEntity | null> {
        return this._mapper.toDomain(await this._companyRepository.create(this._mapper.toRepository(company)));
    }

    public async deleteCompany(rut: string): Promise<CompanyEntity | null> {
        return this._mapper.toDomain(await this._companyRepository.delete(rut));
    }

    public async editCompany(rut: string, company: CompanyEntity): Promise<CompanyEntity | null> {
        return this._mapper.toDomain(await  this._companyRepository.update(rut, this._mapper.toRepository(company)));
    }

    public async getAllCompanies(): Promise<CompanyEntity[] | null> {
        const result = await this._companyRepository.getAll();
        return result.map((item) => this._mapper.toDomain(item));
    }

    public async getOneCompanyById(rut: string): Promise<CompanyEntity | null> {
        return this._mapper.toDomain(await  this._companyRepository.findById(rut));
    }

}