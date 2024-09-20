type QuizState = "quizNotStart" | "quizStarted" | "quizFinished";
let state: QuizState = "quizNotStart";

const quizState = (() => {
  const getState = () => state;
  const changeState = (newState: QuizState) => (state = newState);

  return {getState, changeState}
})();

export default quizState
