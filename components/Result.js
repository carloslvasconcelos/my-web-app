import styles from '../styles/Result.module.css';

export default function Result({ player }) {
  return (
    <div className={styles.result}>
      <h2>Your favorite player is:</h2>
      <p>{player}</p>
    </div>
  );
}