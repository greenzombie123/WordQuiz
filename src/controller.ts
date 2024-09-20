import model from "./wordsModel";
import eventListenerManager from "./eventListenerManager";
import mainButton from "./mainbutton";
import sections from "./sections";
import eventEmitter from "./eventEmitter";

const controller = (() => {

  const test = ()=>{}

  const init = () => {
    eventEmitter.subscribe("problemsCreated", ()=>console.log(123))
    eventListenerManager.setListener(model.fetchWords, mainButton.button)
  };

  return { init };
})();

export default controller