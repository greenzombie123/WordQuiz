type Listener = () => void;

const eventListenerManager = (() => {
  let pairs: Map<Listener, HTMLElement> = new Map();

  const setListener = (listener: Listener, element: HTMLElement) => {

    if(hasListener(element)) removeListener(listener, element)

    pairs.set(listener, element);

    element.addEventListener("click", listener);
  };

  const hasListener = (element: HTMLElement) => {
    let hasIt = false;
    pairs.forEach((value: HTMLElement) => {
      if (value === element) hasIt = true;
    });
    return hasIt
  };

  const removeListener = (listener:Listener, element:HTMLElement) =>{
    element.removeEventListener('click', listener)
    pairs.delete(listener)
  }

  return {setListener};
})();

export default eventListenerManager;
