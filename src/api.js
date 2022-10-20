export const getQuestions = () => {
  return fetch("https://opentdb.com/api.php?amount=5").then((response) =>
    response.json()
  );
};
