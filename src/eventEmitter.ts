type Listener = () => void;
type EventName = string;

const eventEmitter = (() => {
  const manager = new Map<EventName, Listener>();

  const subscribeListener = (eventName: EventName, listener: Listener) => {
    manager.set(eventName, listener);
  };

  const emitEvent = (eventName: EventName) => {
    const listener = manager.get(eventName);

    if (listener) listener();
  };
})();

export default eventEmitter;
