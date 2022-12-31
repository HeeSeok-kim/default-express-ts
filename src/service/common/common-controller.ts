import {NextFunction, Request, Response} from "express";
import InvalidParamsError from "../../exception/custom-error";

class CommentController{

    testApi = async (req:Request, res:Response, next:NextFunction) => {
        try{
            throw {
                status: 404,
                message: "Error Test"
            }
        }catch (error){
            next(error);
        }
    }

    errorTest = async (req:Request, res:Response, next:NextFunction) => {
        try{
            throw new InvalidParamsError("Test Error",404);
        }catch (error){
            next(error);
        }
    }

}

export default CommentController;
