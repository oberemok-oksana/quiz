import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <section className="section">
      <h1>Quizzical</h1>
      <p>Just play with me!</p>
      <button onClick={props.handleClick} className={styles.button}>
        Start quiz
      </button>
    </section>
  );
};

export default Home;
