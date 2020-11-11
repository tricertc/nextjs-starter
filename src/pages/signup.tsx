import Link from 'next/link';
import { LoginLayout } from '~components/layouts';
import SignupForm from '~components/forms/signup-form';

const Signup: React.FC = () => (
  <LoginLayout header="Sign up">
    <SignupForm />
    <p className="note">
      <small>
        Already registered? <Link href="/login">Log in</Link>
      </small>
    </p>
  </LoginLayout>
);

export default Signup;
