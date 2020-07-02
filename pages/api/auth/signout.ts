import { NextApiHandler } from 'next';

import { NotFoundError } from 'backend/errors/not-found-error';
import { errorHandler } from 'backend/middlewares/error-handler';

const routeHandler: NextApiHandler = (req, res) => {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      'jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly',
    );
    return res.json({});
  }
  throw new NotFoundError();
};

export default errorHandler(routeHandler);
