import {Service} from "typedi";
import RolServiceContract from "@core/rol/contracts/service/rol-service.contract";
import RolMapper from "../../../share/mappers/rol.mapper";
import RolRepository from "@infra/database/repository/rol-repository";
import {RolEntity} from "@core/rol/models/rol.entity";

@Service()
export default class RolService implements RolServiceContract {
    private readonly _mapper = new RolMapper();

    public constructor(
        private readonly _rolRepository: RolRepository
    ) {}

    public async createRol(rol: RolEntity): Promise<RolEntity | null> {
        return this._mapper.toDomain(await this._rolRepository.create(this._mapper.toRepository(rol)));
    }

    public async deleteRol(idRol: number): Promise<RolEntity | null> {
        return this._mapper.toDomain(await this._rolRepository.delete(idRol));
    }

    public async editRol(idRol: number, rol: RolEntity): Promise<RolEntity | null> {
        return this._mapper.toDomain(await  this._rolRepository.update(idRol, this._mapper.toRepository(rol)));
    }

    public async getAllRoles(): Promise<RolEntity[] | null> {
        const result = await this._rolRepository.getAll();
        return result.map((item) => this._mapper.toDomain(item));
    }

    public async getOneRolById(id: number): Promise<RolEntity | null> {
        return this._mapper.toDomain(await  this._rolRepository.findById(id));
    }

}