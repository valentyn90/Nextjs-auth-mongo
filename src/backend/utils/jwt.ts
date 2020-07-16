import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import ms from 'ms';
import { User } from 'backend/models/user';

export const generateJWT = (user: User): string => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  return jwt.sign(user.toJWT(), process.env.JWT_KEY, {
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  });
};

export const setJWT = (res: NextApiResponse, userJWT: string): void => {
  // console.log(ms(''));
  res.setHeader(
    'Set-Cookie',
    serialize('jwt', String(userJWT), {
      httpOnly: true,
      path: '/',
      maxAge: process.env.TOKEN_EXPIRES_IN ? ms(process.env.TOKEN_EXPIRES_IN) : undefined,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    }),
  );
};
