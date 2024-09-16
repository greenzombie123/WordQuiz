let eventListeners: (() => void)[] = [];
let buttonText: string = "";
let state: string = "Start";

const mainButton = document.querySelector(".mainButton") as HTMLElement;

const hideButton = () => (mainButton.style.display = "none");
const revealButton = () => (mainButton.style.display = "block");
const changeText = (text: string) => (mainButton.textContent = text);
