import { Request, Response, Router } from 'express';
import Container from 'typedi';
import HomeController from '@app/test/controllers/home.controller';
import ShowController from '@app/test/controllers/show.controller';
import CreateController from '../controllers/create.controller';
import EditController from '../controllers/edit.controller';
import DeleteController from '../controllers/delete.controller';

const router: Router = Router();

// get dependenci inyection
const homeController = Container.get(HomeController);
const createController = Container.get(CreateController);
const editController = Container.get(EditController);
const showController = Container.get(ShowController);
const deleteController = Container.get(DeleteController);

// routes
router.get('/test', (req: Request, res: Response) => homeController.home(req, res));

router.get('/test/create', (req: Request, res: Response) => createController.form(req, res));
router.post('/test/create', (req: Request, res: Response) => createController.create(req, res));

router.get('/test/:id/edit', (req: Request, res: Response) => editController.form(req, res));
router.put('/test/:id/edit', (req: Request, res: Response) => editController.update(req, res));

router.get('/test/:id/show', (req: Request, res: Response) => showController.show(req, res));

router.delete('/test/:id/delete', (req: Request, res: Response) => deleteController.delete(req, res));

export default router;