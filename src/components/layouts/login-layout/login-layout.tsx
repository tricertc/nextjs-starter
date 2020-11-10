import styles from './login-layout.module.scss';

interface Props {
  header: string;
}

const LoginLayout: React.FC<Props> = (props) => (
  <div className={styles.layout}>
    <div className={styles.container}>
      <h1>Next.js starter</h1>
      <h2>{props.header}</h2>
      {props.children}
    </div>
  </div>
);

export default LoginLayout;
