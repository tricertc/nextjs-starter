import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-iron-session';
import { Modify } from '~common/types/utility';

type SessionRequest<T> = Modify<NextApiRequest, { body: T; session: Session }>;
type SessionResponse<T> = Modify<NextApiResponse, { json: (body: T) => void }>;

export type ApiHandler<T, R> = (
  req: SessionRequest<T>,
  res: SessionResponse<R>
) => Promise<void> | void;

export type { SessionRequest };
