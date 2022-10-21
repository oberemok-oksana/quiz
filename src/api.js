export const getQuestions = () => {
  return fetch("https://opentdb.com/api.php?amount=5&difficulty=medium").then(
    (response) => response.json()
  );
};
