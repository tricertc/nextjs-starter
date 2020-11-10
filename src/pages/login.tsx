import { useRef } from 'react';
import Link from 'next/link';
import { LoginLayout } from '~components/layouts';
import { FormField } from '~components/forms';

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <LoginLayout header="Log in">
      <form onSubmit={handleLogin}>
        <FormField type="email" label="Email" ref={emailRef} />
        <FormField type="password" label="Password" ref={passwordRef} />
        <button type="submit">Log in</button>
      </form>
      <p className="note">
        <small>
          New user? <Link href="/signup">Sign up</Link>
        </small>
      </p>
    </LoginLayout>
  );
};

export default Login;
