import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

import { User } from 'backend/models/user';

export const generateJWT = (user: User): string => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  return jwt.sign(user.toJWT(), process.env.JWT_KEY);
};

export const setJWT = (res: NextApiResponse, userJWT: string): void => {
  res.setHeader(
    'Set-Cookie',
    serialize('jwt', String(userJWT), {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    }),
  );
};
