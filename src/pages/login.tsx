import Link from 'next/link';
import { LoginLayout } from '~components/layouts';
import LoginForm from '~components/forms/login-form';

const Login: React.FC = () => (
  <LoginLayout header="Log in">
    <LoginForm />
    <p className="note">
      <small>
        New user? <Link href="/signup">Sign up</Link>
      </small>
    </p>
  </LoginLayout>
);

export default Login;
