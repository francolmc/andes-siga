import {Service} from "typedi";
import {Repository} from "typeorm";
import AppDataSource from "@infra/database/data-source";
import CompanyRepositoryContract from "@core/company/contracts/repository/company-repository.contract";
import Company from "../model/company.entity";

@Service()
export default class CompanyRepository implements CompanyRepositoryContract<Company> {
    private _companyRepository: Repository<Company> = AppDataSource.getRepository(Company);

    public  async create(company: Company): Promise<Company | null> {
        return await this._companyRepository.save(company);
    }

    public async delete(rut: string): Promise<Company | null> {
        const localcompany: Company | null = await this.findById(rut);
        if (!localcompany) return null;
        return await this._companyRepository.remove(localcompany);
    }

    public async findById(rut: string): Promise<Company | null> {
        return await  this._companyRepository.findOneBy({ rut })
    }

    public async getAll(): Promise<Company[]> {
        return await this._companyRepository.find();
    }

    public async update(rut: string, company: Company): Promise<Company | null> {
        const localcompany: Company | null = await this.findById(rut);
        if (!localcompany) return null;
        localcompany.name = company.name;
        localcompany.contactEmail = company.contactEmail;
        localcompany.contactName = company.contactName;
        localcompany.contactPhone = company.contactPhone;
        localcompany.isPercentage = company.isPercentage;
        return await this._companyRepository.save(localcompany);
    }

}