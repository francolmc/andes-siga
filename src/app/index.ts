import { Router } from 'express';
import TestRouters from '@app/test/routes/index';

// export all routes
const router: Router = Router();

router.use(TestRouters);

export default router;