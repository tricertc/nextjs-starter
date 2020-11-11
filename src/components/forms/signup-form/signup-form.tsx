import { useRef } from 'react';
import { FormField } from '~components/forms';
import styles from './signup-form.module.scss';

const SignupForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.signupForm} onSubmit={handleLogin}>
      <FormField type="text" label="Name" ref={nameRef} />
      <FormField type="email" label="Email" ref={emailRef} />
      <FormField type="password" label="Password" ref={passwordRef} />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;
