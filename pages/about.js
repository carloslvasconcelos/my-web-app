// About.js
import styles from '../styles/About.module.css'; // Importing the CSS for styling the About page

export default function About() {
  return (
    <div className={styles.container}>
      {/* Display the main heading of the About page */}
      <h1>About the Quiz</h1>

      {/* Provide a brief description of the quiz */}
      <p>This quiz was created to help you discover your favorite player!</p>
    </div>
  );
}
