import { Request, Response, Router } from 'express';
import Container from 'typedi';
import HomeController from '@app/user/controllers/home.controller';
import ShowController from '@app/user/controllers/show.controller';
import CreateController from '../controllers/create.controller';
import EditController from '../controllers/edit.controller';
import DeleteController from '../controllers/delete.controller';
import { auth } from '@app/middleware/auth.middleware';

const router: Router = Router();

// get dependenci inyection
const homeController = Container.get(HomeController);
const createController = Container.get(CreateController);
const editController = Container.get(EditController);
const showController = Container.get(ShowController);
const deleteController = Container.get(DeleteController);

// routes
router.get('/user', auth , (req: Request, res: Response) => homeController.home(req, res));

router.get('/user/create', auth, (req: Request, res: Response) => createController.form(req, res));
router.post('/user/create', auth, (req: Request, res: Response) => createController.create(req, res));

router.get('/user/:id/edit', auth, (req: Request, res: Response) => editController.form(req, res));
router.put('/user/:id/edit', auth, (req: Request, res: Response) => editController.update(req, res));

router.get('/user/:id/show', auth, (req: Request, res: Response) => showController.show(req, res));

router.delete('/user/:id/delete', auth, (req: Request, res: Response) => deleteController.delete(req, res));

export default router;