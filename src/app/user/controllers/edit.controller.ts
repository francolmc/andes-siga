import { Request, Response } from 'express';
import UserMapper from "../../../share/mappers/user.mapper";
import { Service } from "typedi";
import { EditService } from '@core/user/services/edit.service';
import { UserEntity } from '@core/user/models/user.entity';

@Service()
export default class EditController {
    private _mapper = new UserMapper();

    constructor( 
        private readonly _editService: EditService
    ) {}

    public async form(req: Request, res: Response) {
        const user = await this._editService.edit(+req.params.id);
        if (!user) res.redirect('/user');
        const data = this._mapper.ToDto(user as UserEntity);
        res.render('user/edit', { id: +req.params.id, data });
    }

    public async update(req: Request, res: Response) {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const user = await this._editService.update(+req.params.id, this._mapper.ToDomain({firstName, lastName, email, password}));
        res.redirect(`/user/${user?.id}/show`);
    }
}