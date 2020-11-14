import { setUserSession, withSession } from '~server/session';
import { ensureDbConnection } from '~server/database';
import { AuthResponse, LoginBody } from '~common/types/requests';
import { User } from '~server/models';

export default withSession<LoginBody, AuthResponse>(async (req, res) => {
  await ensureDbConnection();

  const { email, password } = req.body;

  await User.findOne({ email })
    .then(async user => {
      if (user && (await user.verifyPassword(password))) {
        await setUserSession(req, {
          isLoggedIn: true,
          id: user._id,
          email: user.email,
        });
        res.json({ success: true });
      } else {
        throw new Error('Invalid email or password');
      }
    })
    .catch((err: Error) => {
      res.json({ success: false, errorMessage: err.message });
    });
});
