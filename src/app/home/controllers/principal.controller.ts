import { Request, Response } from "express";
import { Service } from "typedi";

@Service()
class PrincipalController {
    public async index(req: Request, res: Response) {
        res.render('index');
    }
}

export default PrincipalController;