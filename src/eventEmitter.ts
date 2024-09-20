type Listener = (...arg:any) => void;
type EventName = string;

const eventEmitter = (() => {
  const manager = new Map<EventName, Listener>();

  const subscribe = (eventName: EventName, listener: Listener) => {
    manager.set(eventName, listener);
  };

  const emitEvent = (eventName: EventName, arg?: unknown) => {
    const listener = manager.get(eventName);

    if (listener && arg)listener(arg);
    else if (listener && !arg) listener()
  };

  return { subscribe, emitEvent };
})();

export default eventEmitter;
