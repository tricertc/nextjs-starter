import Link from 'next/link';
import styles from '../styles/home.module.scss';

const Home: React.FC = () => (
  <div className={styles.layout}>
    <h1>Welcome to Next.js starter</h1>
    <div className={styles.buttons}>
      <Link href="/login">Log in</Link>
      <Link href="/signup">Sign up</Link>
    </div>
  </div>
);

export default Home;
