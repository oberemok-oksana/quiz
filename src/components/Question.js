import clsx from "clsx";
import { useMemo, useState } from "react";
import styles from "./Question.module.css";

const Question = (props) => {
  const [buttonText, setButtonText] = useState("");
  const [clicked, setClicked] = useState(false);

  const shuffle = (answers, correctAnswer) => {
    const randomIndex = Math.trunc(Math.random() * answers.length);
    const copy = answers.slice();
    copy.splice(randomIndex, 0, correctAnswer);
    return copy;
  };

  const allAnswers = useMemo(() => {
    return shuffle(props.incorrectAnswers, props.correctAnswer);
  }, []);

  const handleClick = (answer) => {
    props.handleAnswer(answer, props.correctAnswer);
    setButtonText(answer);
    setClicked(true);
  };

  return (
    <div className={styles["question-card"]}>
      <h2>{props.question}</h2>
      <div className={styles.buttons}>
        {allAnswers.map((answer) => {
          const isClicked = answer === buttonText;
          const isCorrect = props.correctAnswer === buttonText;
          return (
            <button
              key={answer}
              onClick={() => {
                handleClick(answer);
              }}
              className={clsx(styles.btn, {
                [styles.right]: isClicked && isCorrect,
                [styles.wrong]: isClicked && !isCorrect,
                [styles.underline]: clicked && props.correctAnswer === answer,
              })}
              disabled={buttonText}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
