import { Request, Response } from "express";
import { Service } from "typedi";

@Service()
export default class LogoutController {
    public async logout(req: Request, res: Response) {
        req.session.destroy(() => {
            res.redirect('/login');
        });

    }
}