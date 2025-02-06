import { useState } from 'react';
import Result from './Result';
import styles from '../styles/Quiz.module.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Quiz questions
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

  // Handle user's answer selection
  const handleAnswer = (value) => {
    setAnswers([...answers, value]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // Calculate the favorite player based on answers
  const calculateFavoritePlayer = () => {
    const count = {};
    answers.forEach((answer) => {
      count[answer] = (count[answer] || 0) + 1;
    });

    return Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );
  };

  return (
    <div className={styles.quiz}>
      {showResult ? (
        <Result player={calculateFavoritePlayer()} />
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option.value)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
