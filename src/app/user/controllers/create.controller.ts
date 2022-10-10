import { Request, Response } from 'express';
import { Service } from "typedi";
import CreateService from '@core/user/services/create.service';
import UserMapper from '../../../share/mappers/user.mapper';

@Service()
export default class CreateController {
    private _mapper = new UserMapper();

    constructor( 
        private readonly _createService: CreateService
    ) {}

    public form(req: Request, res: Response) {
        res.render('user/create');
    }

    public async create(req: Request, res: Response) {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const user = await this._createService.create(this._mapper.ToDomain({firstName, lastName, email, password}));
        res.redirect(`/user/${user?.id}/show`);
    }
}