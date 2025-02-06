import { useState } from 'react';
import Result from './Result';
import styles from '../styles/Quiz.module.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [name, setName] = useState('');

  // Quiz questions
  const questions = [
    {
      question: "Which Spanish team do you like the most?",
      options: [
        { text: "Barcelona F.C", value: "Messi" },
        { text: "Real Madrid", value: "Cristiano" },
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
      question: "Which team do you know?",
      options: [
        { text: "Barcelona", value: "Messi" },
        { text: "Real Madrid", value: "Cristiano" },
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

    const favoritePlayer = Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );

    return favoritePlayer;
  };

  // Handle form submission (additional user interaction)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}! Let's start the quiz.`);
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

      {/* Additional form for user interaction */}
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}