import { Router } from 'express';
import TestRouters from '@app/user/routes/index';
import PrincipalRouters from '@app/home/routes/index';
import AuthRouters from '@app/auth/routes/index';

// export all routes
const router: Router = Router();

router.use(AuthRouters);
router.use(PrincipalRouters);
router.use(TestRouters);

export default router;