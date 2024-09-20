import model from "./wordsModel";
import eventListenerManager from "./eventListenerManager";
import mainButton from "./mainbutton";
import problemSections from "./problemSection";
import sections from "./sections";
import eventEmitter from "./eventEmitter";

const controller = (() => {

  const test = ()=>{}

  const init = () => {
    eventEmitter.subscribe("problemsCreated", problemSections.setUpQuiz)
    eventEmitter.subscribe("setUpFinished", sections.moveRight)

    eventListenerManager.setListener(model.fetchWords, mainButton.button)
  };

  return { init };
})();

export default controller