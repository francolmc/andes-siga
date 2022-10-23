import {RolEntity} from "@core/rol/models/rol.entity";

export default interface RolServiceContract {
    getOneRolById(id: number): Promise<RolEntity | null>;
    getAllRoles(): Promise<RolEntity[] | null>;
    createRol(rol: RolEntity): Promise<RolEntity | null>;
    editRol(idRol: number, rol: RolEntity): Promise<RolEntity | null>;
    deleteRol(idRol: number): Promise<RolEntity | null>;
}