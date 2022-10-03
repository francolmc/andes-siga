import { Request, Response } from 'express';
import { Service } from "typedi";
import CreateService from '@core/test/services/create.service';
import UserMapper from '../../../share/mappers/user.mapper';

@Service()
export default class CreateController {
    private _mapper = new UserMapper();

    constructor( 
        private readonly _createService: CreateService
    ) {}

    public form(req: Request, res: Response) {
        res.render('test/create');
    }

    public async create(req: Request, res: Response) {
        const {
            firstName,
            lastName,
            age
        } = req.body;

        const user = await this._createService.create(this._mapper.ToDomain({firstName, lastName, age}));
        res.redirect(`/test/${user?.id}/show`);
    }
}