import { CookieSerializeOptions } from 'cookie';

export const cookieSerializeOptions: CookieSerializeOptions = {
  httpOnly: true,
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 1 week
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
};
