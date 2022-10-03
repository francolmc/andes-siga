import { Request, Response } from 'express';
import UserMapper from "../../../share/mappers/user.mapper";
import { Service } from "typedi";
import { UserEntity } from '@core/test/models/user.entity';
import DeleteService from '@core/test/services/delete.service';

@Service()
export default class DeleteController {
    private _mapper = new UserMapper();

    constructor( 
        private readonly _deleteService: DeleteService
    ) {}

    public async delete(req: Request, res: Response) {
        await this._deleteService.delete(+req.params.id);
        res.redirect(`/test`);
    }
}