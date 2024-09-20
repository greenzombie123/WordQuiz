import model from "./wordsModel";
import eventListenerManager from "./eventListenerManager";
import mainButton from "./mainbutton";
import problemSections from "./problemSection";
import sections from "./sections";
import eventEmitter from "./eventEmitter";
import quizState from "./quizState";
import arrowButtons from "./arrowButtons";

const controller = (() => {
  const handleButtonClick = () => {
    const state = quizState.getState();
    if (state === "quizNotStart") {
      model.fetchWords();
    }
  };

  const handleSetUpFinished = () => {
    sections.moveToFirstSlide();
    arrowButtons.revealNextButton();
  };

  const init = () => {
    eventEmitter.subscribe("problemsCreated", problemSections.setUpQuiz);
    eventEmitter.subscribe("setUpFinished", handleSetUpFinished);
    eventEmitter.subscribe("movedFrom1stSlide", arrowButtons.revealPreviousButton)
    eventEmitter.subscribe('movedTo1stSlide', arrowButtons.hidePreviousButton)

    eventListenerManager.setListener(handleButtonClick, mainButton.button);
    eventListenerManager.setListener(
      sections.moveLeft,
      arrowButtons.previousButton,
    );
    eventListenerManager.setListener(
      sections.moveRight,
      arrowButtons.nextButton,
    );
  };

  return { init };
})();

export default controller;
