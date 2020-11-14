import { SessionOptions, withIronSession } from 'next-iron-session';
import { ApiHandler, SessionRequest } from './types';
import { UserSession } from '~common/types';

const options: SessionOptions = {
  cookieName: process.env.SESSION_COOKIE_NAME,
  password: process.env.SESSION_SECRET,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IronSession = (...args: any[]) => Promise<any>;

export const withSession = <T = unknown, R = unknown>(
  handler: ApiHandler<T, R>
): IronSession => withIronSession(handler, options);

export const getUserSession = (req: SessionRequest<unknown>): UserSession => {
  return req.session.get<UserSession>('user');
};

export const setUserSession = async (
  req: SessionRequest<unknown>,
  userSession: UserSession
): Promise<void> => {
  req.session.set('user', userSession);
  await req.session.save();
};
