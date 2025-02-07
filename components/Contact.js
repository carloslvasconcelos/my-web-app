// components/Contact.js
import { useState } from 'react';
import styles from '../styles/Contact.module.css'; // Ensure the CSS file is correctly imported

const Contact = () => {
  // State to toggle visibility of the phone number
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility of the phone number
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle between showing and hiding the phone number
  };

  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <p>If you'd like to get in touch, click the button below to see our phone number:</p>

      {/* Button to toggle visibility of the phone number */}
      <button className={styles.toggleButton} onClick={toggleVisibility}>
        {isVisible ? 'Hide Phone Number' : 'Show Phone Number'}
      </button>

      {/* Conditionally display the phone number if isVisible is true */}
      {isVisible && <p className={styles.phoneNumber}>Our phone number is: (123) 456-7890</p>}
    </div>
  );
};

export default Contact;

