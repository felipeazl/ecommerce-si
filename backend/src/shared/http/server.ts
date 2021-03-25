import express, { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import 'dotenv/config.js';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());

app.use(errors());

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  return res.status(500).json({
    error: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(process.env.PORT || 3000, () => console.log('Server running 3000'));
