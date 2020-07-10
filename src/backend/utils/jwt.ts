import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import ms from 'ms';

import { User } from 'backend/models/user';

const expiresIn = '30s';

export const generateJWT = (user: User): string => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  return jwt.sign(user.toJWT(), process.env.JWT_KEY, { expiresIn });
};

export const setJWT = (res: NextApiResponse, userJWT: string): void => {
  res.setHeader(
    'Set-Cookie',
    serialize('jwt', String(userJWT), {
      httpOnly: true,
      path: '/',
      maxAge: ms(expiresIn),
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    }),
  );
};
