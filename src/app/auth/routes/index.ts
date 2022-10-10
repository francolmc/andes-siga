import { Request, Response, Router } from 'express';
import Container from 'typedi';
import LoginController from '../controllers/login.controller';
import LogoutController from '../controllers/logout.controller';

const router: Router = Router();

// get dependenci inyection
const loginController = Container.get(LoginController);
const logoutController = Container.get(LogoutController);

// routes
router.get('/login', (req: Request, res: Response) => loginController.login(req, res));
router.post('/login', (req: Request, res: Response) => loginController.validate(req, res));
router.post('/logout', (req: Request, res: Response) => logoutController.logout(req, res));

export default router;