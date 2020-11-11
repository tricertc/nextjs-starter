import { useRef } from 'react';
import { FormField } from '~components/forms';
import styles from './login-form.module.scss';

const LoginForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <FormField type="email" label="Email" ref={emailRef} />
      <FormField type="password" label="Password" ref={passwordRef} />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
