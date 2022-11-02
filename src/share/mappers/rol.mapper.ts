import {CompanyEntity} from "@core/company/models/company.entity";

export default class CompantMapper {
    public toDomain(company: any): CompanyEntity {
        return {
            rut: company.rut || undefined,
            name: company.name,
            contactName: company.contactName,
            contactEmail: company.contactEmail,
            contactPhone: company.contactPhone,
            isPercentage: company.isPercentage
        };
    }

    public toRepository(company: CompanyEntity): any {
        return {
            rut: company.rut,
            name: company.name,
            contactName: company.contactName,
            contactEmail: company.contactEmail,
            contactPhone: company.contactPhone,
            isPercentage: company.isPercentage
        };
    }

    public toDto(company: CompanyEntity): any {
        return {
            rut: company.rut,
            name: company.name,
            contactName: company.contactName,
            contactEmail: company.contactEmail,
            contactPhone: company.contactPhone,
            isPercentage: company.isPercentage
        };
    }
}