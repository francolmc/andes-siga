import { Request, Response } from "express";
import { Service } from "typedi";
import { ShowService } from "@core/test/services/show.service";
import UserMapper from "../../../share/mappers/user.mapper";

@Service()
export default class ShowController {
    private _mapper = new UserMapper();

    public constructor( private readonly _showService: ShowService ) {}

    public async show(req: Request, res: Response) {
        const data = await this._showService.show(+req.params.id);
        res.render('test/show', { data });
    }
}