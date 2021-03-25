import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';
import cors from 'cors';
import 'dotenv/config';
import '../typeorm';
import AppError from '../errors/app-errors';
import routes from './routes/router';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(errors());

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: 'error',
      message: err.message,
    });
  }
  return res.status(500).json({
    error: 'error',
    message: 'Internal Server Error',
    que: err.message,
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on ${process.env.PORT}`),
);
