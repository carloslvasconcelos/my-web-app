import { useState } from 'react';
import Result from './Result';
import styles from '../styles/Quiz.module.css';

export default function Quiz() {
  // State to track the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  // State to store the user's answers
  const [answers, setAnswers] = useState([]);
  
  // State to control whether the result is displayed
  const [showResult, setShowResult] = useState(false);

  // Quiz questions with options
  const questions = [
    {
      question: "Which Spanish team do you like the most?",
      options: [
        { text: "Real Madrid", value: "Cristiano" },
        { text: "Barcelona F.C", value: "Messi" },
      ],
    },
    {
      question: "Which nickname do you think is cooler?",
      options: [
        { text: "GOAT", value: "Messi" },
        { text: "ROBOT", value: "Cristiano" },
      ],
    },
    {
      question: "What is your favorite number?",
      options: [
        { text: "10", value: "Messi" },
        { text: "7", value: "Cristiano" },
      ],
    },
  ];

  // Function to handle the selection of an answer
  const handleAnswer = (value) => {
    // Add the selected answer to the answers array
    setAnswers([...answers, value]);

    // If there are more questions, move to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If all questions have been answered, show the result
      setShowResult(true);
    }
  };

  // Function to calculate the user's favorite player based on answers
  const calculateFavoritePlayer = () => {
    // Count the occurrences of each answer
    const count = {};
    answers.forEach((answer) => {
      count[answer] = (count[answer] || 0) + 1;
    });

    // Return the answer with the highest count (most selected option)
    return Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );
  };

  return (
    <div className={styles.quiz}>
      {showResult ? (
        // Show the result once the quiz is completed
        <Result player={calculateFavoritePlayer()} />
      ) : (
        <div>
          {/* Display the current question */}
          <h2>{questions[currentQuestion].question}</h2>
          <div className={styles.options}>
            {/* Render options for the current question */}
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={styles.optionButton}
                onClick={() => handleAnswer(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
