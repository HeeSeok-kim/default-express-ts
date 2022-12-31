import {Request,Response,NextFunction} from "express";
import Error from "../interface/error"

const errorLogger = (error:Error, request:Request, response:Response, next:NextFunction) => {
    //TS에 맞는 로그 파일로 만들어야함
    next(error);
};

const errorHandler = (error:Error, req:Request, res:Response,next:NextFunction) => {
    res.status(error.status).json({
        errorMessage: error.message,
    });
    next()
};

export { errorLogger, errorHandler }
