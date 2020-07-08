import { NextApiHandler } from 'next';
import { Collection } from 'mongodb';
import { compose } from 'lodash/fp';

import { User, UserDoc } from 'backend/models/user';
import { BadRequestError } from 'backend/errors/bad-request-error';
import { NotFoundError } from 'backend/errors/not-found-error';
import { connectToDb } from 'backend/middlewares/connect-to-db';
import { validateRequest } from 'backend/middlewares/validate-request';
import { errorHandler } from 'backend/middlewares/error-handler';
import { signInSchema } from 'shared/validation';
import { SignInInput } from 'shared/interfaces';
import { generateJWT, setJWT } from 'backend/utils/jwt';

const routeHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    if (!req.db) {
      throw new Error('db not found');
    }
    const usersCollection: Collection<UserDoc> = req.db.collection('users');

    const { email, password } = req.body as SignInInput;

    const existingUser = await usersCollection.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }

    const user = new User(existingUser);
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      throw new BadRequestError('Invalid credentials');
    }

    const userJwt = generateJWT(user);
    setJWT(res, userJwt);

    return res.json(user.toJSON());
  }
  throw new NotFoundError();
};

export default compose(errorHandler, validateRequest(signInSchema), connectToDb)(routeHandler);
