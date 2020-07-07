import { NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';
import compose from 'lodash/fp/compose';
import { serialize } from 'cookie';

import { User, UsersCollection } from 'backend/models/user';
import { BadRequestError } from 'backend/errors/bad-request-error';
import { errorHandler } from 'backend/middlewares/error-handler';
import { validateRequest } from 'backend/middlewares/validate-request';
import { NotFoundError } from 'backend/errors/not-found-error';
import { connectToDb } from 'backend/middlewares/connect-to-db';
import { signUpSchema } from 'shared/validation';
import { cookieSerializeOptions } from 'backend/constants';

const routeHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    if (!req.db) {
      throw new Error('db not found');
    }
    const usersCollection: UsersCollection = req.db.collection('users');

    const { email, password } = req.body;

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const hashedPassword = await User.toHash(password);

    await usersCollection.insertOne({ email, password: hashedPassword }, { w: 'majority' });
    const userFromBd = await usersCollection.findOne({ email });
    if (!userFromBd) {
      throw new Error('Internal error, please try again later');
    }
    const user = new User(userFromBd);

    // Generate JWT
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined');
    }
    const userJwt = jwt.sign(user.toJSON(), process.env.JWT_KEY);

    // Set JWT
    res.setHeader('Set-Cookie', serialize('jwt', String(userJwt), cookieSerializeOptions));

    return res.status(201).json(user.toJSON());
  }
  throw new NotFoundError();
};

export default compose(errorHandler, validateRequest(signUpSchema), connectToDb)(routeHandler);
