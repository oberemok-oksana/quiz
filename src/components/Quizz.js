import { useEffect, useState } from "react";
import { getQuestions } from "../api";
import Question from "./Question";
import styles from "./Quizz.module.css";

const Quizz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((data) => setQuestions(data.results));
  }, []);
  console.log(questions);

  return (
    <section className="section">
      <div className="container">
        {questions.map((question) => (
          <Question
            key={question.question}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question["incorrect_answers"]}
          />
        ))}
      </div>
    </section>
  );
};

export default Quizz;

//https://opentdb.com/api.php?amount=10
//correct_answer :"Heat Sink"

// incorrect_answers : ["CPU Vent", "Temperature Decipator", "Heat Vent"]
