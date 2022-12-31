import {Router,Request, Response } from 'express';
import CommonController from "../service/common/common-controller";
const router = Router();

const commonController = new CommonController();

router.get('/',commonController.testApi);
router.get('/error',commonController.errorTest);

export default router;
