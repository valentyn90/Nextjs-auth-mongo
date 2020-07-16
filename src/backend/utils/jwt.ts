import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import ms from 'ms';
import { User } from 'backend/models/user';

export const generateJWT = (user: User): string => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!process.env.TOKEN_EXPIRES_IN) {
    throw new Error('TOKEN_EXPIRES_IN must be defined');
  }

  return jwt.sign(user.toJWT(), process.env.JWT_KEY, {
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  });
};

export const setJWT = (res: NextApiResponse, userJWT: string): void => {
  if (!process.env.TOKEN_EXPIRES_IN) {
    throw new Error('TOKEN_EXPIRES_IN must be defined');
  }

  res.setHeader(
    'Set-Cookie',
    serialize('jwt', String(userJWT), {
      httpOnly: true,
      path: '/',
      maxAge: ms(process.env.TOKEN_EXPIRES_IN),
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    }),
  );
};
