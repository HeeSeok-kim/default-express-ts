import {Router,Request, Response } from 'express';
import CommonController from "../service/common/common-controller";
import Posts from '../models/posts'

const router = Router();

const commonController = new CommonController();

router.get('/',commonController.testApi);
router.get('/error',commonController.errorTest);
router.post('/',async (req:Request, res:Response) => {
    try {
        const {title,content} = req.body;
        await Posts.create({title, content});
        res.json({message:"등록되었습니다."})
    }catch (error){
        console.log(error);
    }
});
export default router;
