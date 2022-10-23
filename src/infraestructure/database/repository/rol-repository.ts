import {Service} from "typedi";
import RolRepositoryContract from "@core/rol/contracts/repository/rol-repository.contract";
import Rol from "@infra/database/model/rol.entity";
import {Repository} from "typeorm";
import AppDataSource from "@infra/database/data-source";

@Service()
export default class RolRepository implements RolRepositoryContract<Rol> {
    private _rolRepository: Repository<Rol> = AppDataSource.getRepository(Rol);

    public  async create(rol: Rol): Promise<Rol | null> {
        return await this._rolRepository.save(rol);
    }

    public async delete(id: number): Promise<Rol | null> {
        const localRol: Rol | null = await this.findById(id);
        if (!localRol) return null;
        return await this._rolRepository.remove(localRol);
    }

    public async findById(id: number): Promise<Rol | null> {
        return await  this._rolRepository.findOneBy({ id });
    }

    public async getAll(): Promise<Rol[]> {
        return await this._rolRepository.find();
    }

    public async update(id: number, rol: Rol): Promise<Rol | null> {
        const localRol: Rol | null = await this.findById(id);
        if (!localRol) return null;
        localRol.name = rol.name;
        return await this._rolRepository.save(localRol);
    }

}