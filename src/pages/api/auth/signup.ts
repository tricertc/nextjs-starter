import { setUserSession, withSession } from '~server/session';
import { ensureDbConnection } from '~server/database';
import { AuthResponse, SignupBody } from '~common/types/requests';
import { User } from '~server/models';

export default withSession<SignupBody, AuthResponse>(async (req, res) => {
  await ensureDbConnection();

  await User.create(req.body)
    .then(async user => {
      await setUserSession(req, {
        id: user._id,
        email: user.email,
        isLoggedIn: true,
      });
      res.json({ success: true });
    })
    .catch((err: Error) => {
      setUserSession(req, { isLoggedIn: false });
      res.json({ success: false, errorMessage: err.message });
    });
});
