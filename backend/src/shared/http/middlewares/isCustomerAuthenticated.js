export default function isCustomerAuthenticated(req, res, _next,) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return notAuthorized(res, 'Product')
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, process.env.CUSTOMER_KEY);

    const { sub } = decodedToken

    req.user = {
      id: sub,
    };

    return _next();
  } catch (error) {
    return notAuthorized(res, 'Product')
  }
}
