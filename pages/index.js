import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Favorite Player Quiz!</h1>
      <nav className={styles.nav}>
        <Link href="./quiz">Start Quiz</Link>
        <Link href="./about">About</Link>
        <Link href="./contact">Contact</Link>
      </nav>
    </div>
  );
}