// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router'; // Importing the Next.js router for page navigation
import Link from 'next/link'; // Importing Link component for client-side navigation
import styles from '../styles/Home.module.css'; // Importing the CSS for styling the homepage

export default function Home() {
  // State to store the user's name input
  const [name, setName] = useState('');
  
  // State to control the visibility of the name input form
  const [showForm, setShowForm] = useState(true);
  
  // Next.js router instance for programmatic navigation
  const router = useRouter();

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert(`Hello, ${name}! Let's start the quiz.`); // Display a greeting alert with the user's name
    setShowForm(false); // Hide the form after submission
    router.push('/quiz'); // Navigate to the quiz page
  };

  return (
    <div className={styles.container}>
      {/* Main heading for the homepage */}
      <h1>Welcome to the Favorite Player Quiz!</h1>
      
      {/* Display the form only if showForm is true */}
      {showForm && (
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update the name state as user types
              required // Ensure the input field is filled before submission
            />
          </label>
          <button type="submit">Start Quiz</button>
        </form>
      )}

      {/* Navigation links for the About and Contact pages */}
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
