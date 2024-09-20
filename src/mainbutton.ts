const button = document.querySelector(".mainButton") as HTMLElement;
const hideButton = () => (button.style.display = "none");
const revealButton = () => (button.style.display = "block");
const changeText = (text: string) => (button.textContent = text);

const mainButton = {
    button, hideButton, revealButton, changeText
}

export default mainButton
