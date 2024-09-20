type Listener = () => void;
type EventName = string;

const eventEmitter = (() => {
  const manager = new Map<EventName, Listener>();

  const subscribe = (eventName: EventName, listener: Listener) => {
    manager.set(eventName, listener);
  };

  const emitEvent = (eventName: EventName) => {
    const listener = manager.get(eventName);

    if (listener) listener();
  };

  return {subscribe, emitEvent}
})();

export default eventEmitter;
