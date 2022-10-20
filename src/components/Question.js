import styles from "./Question.module.css";

const Question = (props) => {
  const shuffleAnswers = (array, correctAnswer) => {
    const copy = array.slice();
    const randomIndex = Math.trunc(Math.random() * copy.length - 1);
    copy.splice(randomIndex, 0, correctAnswer);
    return copy;
  };

  const shuffledAnswers = shuffleAnswers(
    props.incorrectAnswers,
    props.correctAnswer
  );

  // console.log(shuffleAnswers([1, 2, 3, 4]));

  return (
    <div className={styles["question-card"]}>
      <h2>{props.question}</h2>
      <div className={styles.buttons}>
        {/* <button className={styles.btn}>{props.correctAnswer}</button> */}
        {shuffledAnswers.map((answer) => (
          <button className={styles.btn}>{answer}</button>
        ))}

        {/* <button className={styles.btn}>answer 3</button>
        <button className={styles.btn}>answer 4</button> */}
      </div>
    </div>
  );
};

export default Question;
