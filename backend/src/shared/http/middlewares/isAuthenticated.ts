import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import AppError from '../../errors/app-errors';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

dotenv.config();

export default function isAuthenticated(
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, process.env.JWT_SECRET || '');

    const { sub } = decodedToken as ITokenPayload;

    req.user = {
      id: sub,
    };

    return _next();
  } catch (error) {
    throw new AppError('Invalid JWT Token', 403);
  }
}
