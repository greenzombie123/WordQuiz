export type ProblemData = {
  question: number;
  isFinished: boolean;
  chosenAnswer?:string
};

const warningBox = (() => {
  const warningBox = document.querySelector(".warningBox") as HTMLElement;
  //   let timerId:string

  const reveal = () => (warningBox.style.display = "block");
  const hide = () => {
    warningBox.textContent = "";
    warningBox.style.display = "none";
  };
  const warnUser = (problemData: ProblemData[]) => {
    problemData.forEach((problem) => {
      if (!problem.isFinished) {
        const text = document.createElement("p") as HTMLElement;
        text.className = "text";
        text.textContent = `Question ${problem.question} is not completed.`;
        warningBox.appendChild(text);
      }
    });

    reveal()

    setTimeout(() => {
        hide()
    }, 2000);
  };

  return {warnUser };
})();

export default warningBox;
