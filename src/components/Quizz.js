import { useEffect, useState } from "react";
import { getQuestions } from "../api";
import Question from "./Question";
import styles from "./Quizz.module.css";
import Confetti from "react-confetti";

const Quizz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [clickAmount, setClickAmount] = useState(0);

  const handleAnswer = (answer, correctAnswer) => {
    setClickAmount((prev) => prev + 1);
    const correct = answer === correctAnswer;
    if (correct) {
      setPoints((prev) => prev + 1);
    }
    return correct;
  };

  useEffect(() => {
    setIsLoading(true);
    getQuestions().then((data) => {
      setQuestions(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="section">
      {clickAmount === 5 && <Confetti />}
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="container">
          {questions.map((question) => (
            <Question
              key={question.question}
              question={question.question}
              correctAnswer={question.correct_answer}
              incorrectAnswers={question["incorrect_answers"]}
              handleAnswer={handleAnswer}
            />
          ))}
          <h3>
            You scored {points}/{questions.length} points!
          </h3>
          <button onClick={props.handleClick} className={styles.btn}>
            Play again
          </button>
        </div>
      )}
    </section>
  );
};

export default Quizz;

//https://opentdb.com/api.php?amount=10
//correct_answer :"Heat Sink"

// incorrect_answers : ["CPU Vent", "Temperature Decipator", "Heat Vent"]
