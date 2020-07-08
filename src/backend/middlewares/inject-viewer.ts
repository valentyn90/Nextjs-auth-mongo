import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';
import { TokenPayload, UsersCollection, User } from 'backend/models/user';
import { ObjectId } from 'mongodb';

export const injectViewer = (nextApiHandler: NextApiHandler): NextApiHandler => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.cookies.jwt) {
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined');
    }
    if (!req.db) {
      throw new Error('db not found');
    }

    const usersCollection: UsersCollection = req.db.collection('users');

    try {
      const { id } = jwt.verify(req.cookies.jwt, process.env.JWT_KEY) as TokenPayload;
      const userFromDb = await usersCollection.findOne({ _id: new ObjectId(id) });
      if (!userFromDb) {
        throw new Error('user not found');
      }
      const user = new User(userFromDb);

      req.viewer = user.toJSON();
    } catch {
      res.json({ viewer: null });
    }
  }

  await nextApiHandler(req, res);
};
