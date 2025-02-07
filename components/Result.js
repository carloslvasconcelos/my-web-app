// Result.js
import styles from '../styles/Result.module.css'; // Importing the CSS for styling the result component

export default function Result({ player }) {
  return (
    <div className={styles.result}>
      {/* Display a heading indicating the favorite player */}
      <h2>Your favorite player is:</h2>
      
      {/* Display the player's name passed as a prop */}
      <p>{player}</p>
    </div>
  );
}
