import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import bookRouter from './routes/bookRoutes';



const app = express();


app.use(express.json());

app.use(bookRouter);

app.use(function (err:ErrorRequestHandler, req:Request, res:Response, next:NextFunction){
    res.status(500).send('Something broke!');
});

export default app;