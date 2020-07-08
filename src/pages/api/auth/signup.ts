import { NextApiHandler } from 'next';
import compose from 'lodash/fp/compose';
import * as yup from 'yup';

import { User, UsersCollection } from 'backend/models/user';
import { BadRequestError } from 'backend/errors/bad-request-error';
import { errorHandler } from 'backend/middlewares/error-handler';
import { validateRequest } from 'backend/middlewares/validate-request';
import { NotFoundError } from 'backend/errors/not-found-error';
import { connectToDb } from 'backend/middlewares/connect-to-db';
import { firstNameValidation, emailValidation, passwordValidation } from 'shared/validation';
import { SignUpInput } from 'shared/interfaces';
import { generateJWT, setJWT } from 'backend/utils/jwt';

const validationSchema = yup.object().shape({
  firstName: firstNameValidation,
  email: emailValidation,
  password: passwordValidation,
});

const routeHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    if (!req.db) {
      throw new Error('db not found');
    }
    const usersCollection: UsersCollection = req.db.collection('users');

    const { firstName, email, password } = req.body as SignUpInput;

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const hashedPassword = await User.toHash(password);

    await usersCollection.insertOne(
      { firstName, email, password: hashedPassword },
      { w: 'majority' },
    );
    const userFromDb = await usersCollection.findOne({ email });
    if (!userFromDb) {
      throw new Error('Internal error, please try again later');
    }
    const user = new User(userFromDb);

    const userJwt = generateJWT(user);
    setJWT(res, userJwt);

    return res.status(201).json(user.toJSON());
  }
  throw new NotFoundError();
};

export default compose(errorHandler, validateRequest(validationSchema), connectToDb)(routeHandler);
