import {RolEntity} from "@core/rol/models/rol.entity";

export default class RolMapper {
    public toDomain(rol: any): RolEntity {
        return {
            id: rol.id || undefined,
            name: rol.name
        };
    }

    public toRepository(rol: RolEntity): any {
        return {
            id: rol.id,
            name: rol.name
        };
    }

    public toDto(rol: RolEntity): any {
        return {
            id: rol.id,
            name: rol.name
        };
    }
}