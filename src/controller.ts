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
    mainButton.hideButton();
  };

  const handleNextButtonClick = () => {
    let currentSlide = sections.getCurrentSlide();
    if (currentSlide !== 4) {
      sections.moveRight();
      currentSlide = sections.getCurrentSlide();
      if (currentSlide === 2) arrowButtons.revealPreviousButton()
      if (currentSlide === 4) arrowButtons.changeToFinishButton();
    }
  };

  const handlePreviousButtonClick = () => {
    let currentSlide = sections.getCurrentSlide();
    if (currentSlide !== 1) {
      sections.moveLeft();
      currentSlide = sections.getCurrentSlide();
      if(currentSlide === 1) arrowButtons.hidePreviousButton()
      if (
        currentSlide !== 4 &&
        arrowButtons.nextButton.classList.contains("finishButton")
      )
        arrowButtons.changeToNextButton();
    }
  };

  const init = () => {
    eventEmitter.subscribe("problemsCreated", problemSections.setUpQuiz);
    eventEmitter.subscribe("setUpFinished", handleSetUpFinished);

    eventListenerManager.setListener(handleButtonClick, mainButton.button);
    eventListenerManager.setListener(
      handlePreviousButtonClick,
      arrowButtons.previousButton,
    );
    eventListenerManager.setListener(
      handleNextButtonClick,
      arrowButtons.nextButton,
    );
  };

  return { init };
})();

export default controller;
