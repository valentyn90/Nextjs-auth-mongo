import { NextApiHandler } from 'next';
import { compose } from 'lodash/fp';

import { currentUser } from 'backend/middlewares/current-user';
import { NotFoundError } from 'backend/errors/not-found-error';
import { errorHandler } from 'backend/middlewares/error-handler';

const routeHandler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    return res.json({ currentUser: req.currentUser || null });
  }
  throw new NotFoundError();
};

export default compose(errorHandler, currentUser)(routeHandler);
