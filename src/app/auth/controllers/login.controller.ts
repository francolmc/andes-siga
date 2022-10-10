import { ValidateService } from "@core/user/services/validate.service";
import { Request, Response } from "express";
import { Service } from "typedi";

@Service()
export default class LoginController {
    constructor(
        private _validateService: ValidateService
    ) {}

    public async login(req: Request, res: Response) {
        res.render('login/index', {
            error: '',
            email: ''
        });
    }

    public async validate(req: any, res: Response) {
        const {
            email,
            password
        } = req.body;
        if (await this._validateService.validateUser(email, password)) {
            req.session.validateUser = true;
            res.redirect('/user');
        } else {
            res.render('login/index', {
                error: 'Los datos ingresados no son correctos.',
                email
            });
        }
    }
}