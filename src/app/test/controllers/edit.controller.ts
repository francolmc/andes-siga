import { Request, Response } from 'express';
import UserMapper from "../../../share/mappers/user.mapper";
import { Service } from "typedi";
import { EditService } from '@core/test/services/edit.service';
import { UserEntity } from '@core/test/models/user.entity';

@Service()
export default class EditController {
    private _mapper = new UserMapper();

    constructor( 
        private readonly _editService: EditService
    ) {}

    public async form(req: Request, res: Response) {
        const user = await this._editService.edit(+req.params.id);
        if (!user) res.redirect('/test');
        const data = this._mapper.ToDto(user as UserEntity);
        res.render('test/edit', { id: +req.params.id, data });
    }

    public async update(req: Request, res: Response) {
        const {
            firstName,
            lastName,
            age
        } = req.body;

        const user = await this._editService.update(+req.params.id, this._mapper.ToDomain({firstName, lastName, age}));
        res.redirect(`/test/${user?.id}/show`);
    }
}