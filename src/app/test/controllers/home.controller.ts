import { Request, Response } from "express";
import { Service } from "typedi";
import { HomeService } from "@core/test/services/home.service";
import UserDTO from "../DTOs/user.dto";
import UserMapper from "../../../share/mappers/user.mapper";

@Service()
class HomeController {
    private _mapper = new UserMapper();

    constructor( 
        private readonly _homeService: HomeService
    ) {}

    public async home(req: Request, res: Response) {
        const allUsers = await this._homeService.showAllUsers();
        const data: UserDTO[] = allUsers.map((item) => this._mapper.ToDto(item));
        res.render('test/index', { data });
    }
}

export default HomeController;