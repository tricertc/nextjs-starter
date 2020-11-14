export type UserSession =
  | { isLoggedIn: false }
  | { isLoggedIn: true; id: unknown; email: string };
