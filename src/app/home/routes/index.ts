import { Request, Response, Router } from 'express';
import Container from 'typedi';
import PrincipalController from '../controllers/principal.controller';

const router: Router = Router();

// get dependenci inyection
const principalController = Container.get(PrincipalController);

// routes
router.get('/', (req: Request, res: Response) => principalController.index(req, res));

export default router;