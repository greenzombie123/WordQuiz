import model from "./wordsModel";
import eventListenerManager from "./eventListenerManager";
import mainButton from "./mainbutton";
import problemSections from "./problemSection";
import sections from "./sections";
import eventEmitter from "./eventEmitter";
import quizState from "./quizState";

const controller = (() => {

  const handleButtonClick = ()=>{
    const state = quizState.getState()
    if(state === "quizNotStart"){
      model.fetchWords()
    }
  }

  const init = () => {
    eventEmitter.subscribe("problemsCreated", problemSections.setUpQuiz)
    eventEmitter.subscribe("setUpFinished", sections.moveRight)

    eventListenerManager.setListener(handleButtonClick, mainButton.button)
  };

  return { init };
})();

export default controller