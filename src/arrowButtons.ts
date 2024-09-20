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

  const hidePreviousButton = ()=> (previousButton.style.visibility = "hidden");

  return {previousButton, nextButton, revealNextButton, revealPreviousButton, hideButtons, hidePreviousButton}
})()

export default arrowButtons
