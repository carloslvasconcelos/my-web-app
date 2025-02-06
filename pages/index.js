import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(true);
  const router = useRouter();

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}! Let's start the quiz.`);
    setShowForm(false);
    router.push('/quiz');
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the Favorite Player Quiz!</h1>
      {showForm && (
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <button type="submit">Start Quiz</button>
        </form>
      )}

      {/* Links de navegação */}
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
