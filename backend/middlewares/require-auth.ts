import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { NotAuthorizedError } from 'backend/errors/not-authorized-error';

export const requireAuth = (nextApiHandler: NextApiHandler): NextApiHandler => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  await nextApiHandler(req, res);
};
