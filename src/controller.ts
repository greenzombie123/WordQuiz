import model from "./wordsModel";
import eventListenerManager from "./eventListenerManager";
import mainButton from "./mainbutton";
import problemSections from "./problemSection";
import sections from "./sections";
import eventEmitter from "./eventEmitter";
import arrowButtons from "./arrowButtons";
import warningBox from "./warningBox";
import resultSection from "./resultSection";
import * as loadingBox from "./loadingBox";

const controller = (() => {
  const handleButtonClick = () => {
    let currentSlide = sections.getCurrentSlide();
    if (currentSlide === 0) {
      model.fetchWords();
    } else if (currentSlide === 5) {
      model.resetProblems();
      model.randomizeProblems();
      const newProblems = model.getProblems();
      problemSections.setUpQuiz(newProblems);
      sections.moveBackToFirstSlide();
      arrowButtons.changeToNextButton();
      arrowButtons.revealNextButton();
      mainButton.hideButton();
    }
  };

  const handleSetUpFinished = () => {
    loadingBox.hide()
    sections.moveToFirstSlide();
    arrowButtons.revealNextButton();
  };

  const handleNextButtonClick = () => {
    let currentSlide = sections.getCurrentSlide();
    if (currentSlide !== 4) {
      sections.moveRight();
      currentSlide = sections.getCurrentSlide();
      if (currentSlide === 2) arrowButtons.revealPreviousButton();
      if (currentSlide === 4) arrowButtons.changeToFinishButton();
    } else if (currentSlide === 4) {
      const isQuizFinished = problemSections.areAllButtonsClicked();
      if (isQuizFinished) {
        arrowButtons.hideButtons();
        mainButton.changeText("Reset");
        mainButton.revealButton();
        const problemData = problemSections.getProblems();
        model.updateProblems(problemData);
        resultSection.setUp(model.getProblems());
        sections.moveToResultSection();
      } else {
        const problemData = problemSections.getProblems();
        warningBox.warnUser(problemData);
      }
    }
  };

  const handlePreviousButtonClick = () => {
    let currentSlide = sections.getCurrentSlide();
    if (currentSlide !== 1) {
      sections.moveLeft();
      currentSlide = sections.getCurrentSlide();
      if (currentSlide === 1) arrowButtons.hidePreviousButton();
      if (
        currentSlide !== 4 &&
        arrowButtons.nextButton.classList.contains("finishButton")
      )
        arrowButtons.changeToNextButton();
    }
  };

  const handleFetchingWords = () => {
    mainButton.hideButton();
    loadingBox.reveal();
  };

  const init = () => {
    eventEmitter.subscribe("problemsCreated", problemSections.setUpQuiz);
    eventEmitter.subscribe("setUpFinished", handleSetUpFinished);
    eventEmitter.subscribe("fetchingWords", handleFetchingWords);

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
