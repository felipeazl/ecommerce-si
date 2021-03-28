import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv'

import { notAuthorized } from '../../errors'

dotenv.config()


export default function isAdminAuthenticated(req, res, _next,) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return notAuthorized(res, 'Product')
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, process.env.SECRET_KEY);

    const { sub } = decodedToken

    req.user = {
      id: sub,
    };

    return _next();
  } catch (error) {
    return notAuthorized(res, 'Product')
  }
}
