import { Router } from 'express';
import TestRouters from '@app/test/routes/index';
import PrincipalRouters from '@app/home/routes/index';

// export all routes
const router: Router = Router();

router.use(TestRouters);
router.use(PrincipalRouters);

export default router;