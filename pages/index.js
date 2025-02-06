import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Favorite Player Quiz!</h1>
      <nav className={styles.nav}>
        <Link href="./quiz.js">Start Quiz</Link>
        <Link href="./about.js">About</Link>
        <Link href="./contact.js">Contact</Link>
      </nav>
    </div>
  );
}