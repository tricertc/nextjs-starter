import { useRef } from 'react';
import Link from 'next/link';
import { LoginLayout } from '~components/layouts';
import { FormField } from '~components/forms';

const Signup: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <LoginLayout header="Sign up">
      <form onSubmit={handleLogin}>
        <FormField type="text" label="Name" ref={nameRef} />
        <FormField type="email" label="Email" ref={emailRef} />
        <FormField type="password" label="Password" ref={passwordRef} />
        <button type="submit">Sign up</button>
      </form>
      <p className="note">
        <small>
          Already registered? <Link href="/login">Log in</Link>
        </small>
      </p>
    </LoginLayout>
  );
};

export default Signup;
