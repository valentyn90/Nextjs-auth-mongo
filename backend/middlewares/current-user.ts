import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';
import { CurrentUser } from 'backend/models/user';

export const currentUser = (nextApiHandler: NextApiHandler): NextApiHandler => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.cookies.jwt) {
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined');
    }

    try {
      const payload = jwt.verify(req.cookies.jwt, process.env.JWT_KEY) as CurrentUser;
      req.currentUser = payload;
    } catch {
      res.json({ currentUser: null });
    }
  }

  await nextApiHandler(req, res);
};
