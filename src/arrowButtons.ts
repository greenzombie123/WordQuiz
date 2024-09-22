const arrowButtons = (() => {
  const previousButton = document.querySelector(
    ".previousButton",
  ) as HTMLButtonElement;
  const nextButton = document.querySelector(".nextButton") as HTMLButtonElement;

  const revealPreviousButton = () =>
    (previousButton.style.visibility = "visible");

  const revealNextButton = () => (nextButton.style.visibility = "visible");
  const hideButtons = () => {
    previousButton.style.visibility = "hidden";
    nextButton.style.visibility = "hidden";
  };

  const hidePreviousButton = () => (previousButton.style.visibility = "hidden");
  const changeToFinishButton = () => {
    nextButton.classList.add("finishButton");
    nextButton.textContent = "Finish";
  };
  const changeToNextButton = () => {
    nextButton.classList.remove("finishButton");
    nextButton.textContent = ""
  };

  return {
    previousButton,
    nextButton,
    revealNextButton,
    revealPreviousButton,
    hideButtons,
    hidePreviousButton,
    changeToFinishButton,
    changeToNextButton,
  };
})();

export default arrowButtons;
