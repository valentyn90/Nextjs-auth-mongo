import { NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';
import * as yup from 'yup';
import { serialize } from 'cookie';
import { Collection } from 'mongodb';
import { compose } from 'lodash/fp';

import { User, UserDocument } from 'backend/models/user';
import { BadRequestError } from 'backend/errors/bad-request-error';
import { Password } from 'backend/services/password';
import { NotFoundError } from 'backend/errors/not-found-error';
import { connectToDb } from 'backend/middlewares/connect-to-db';
import { validateRequest } from 'backend/middlewares/validate-request';
import { errorHandler } from 'backend/middlewares/error-handler';

const signinSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().trim().required(),
});

const routeHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!req.db) {
      throw new Error('db not found');
    }

    const usersCollection: Collection<UserDocument> = req.db.collection('users');

    const existingUser = await usersCollection.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }
    const passwordMatch = await Password.compare(existingUser.password, password);
    if (!passwordMatch) {
      throw new BadRequestError('Invalid credentials');
    }
    const user = new User(existingUser);

    // Generate JWT
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined');
    }
    const userJwt = jwt.sign(user.toJSON(), process.env.JWT_KEY);

    // Set JWT
    res.setHeader('Set-Cookie', serialize('jwt', String(userJwt), { httpOnly: true, path: '/' }));

    return res.status(200).json(user.toJSON());
  }
  throw new NotFoundError();
};

export default compose(errorHandler, validateRequest(signinSchema), connectToDb)(routeHandler);
