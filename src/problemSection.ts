import eventEmitter from "./eventEmitter";
import { Problem } from "./wordsModel";

const problemSections = (() => {
  
  let problemSections: HTMLDivElement[] = Array.from(
    document.querySelectorAll(".problemSection"),
  );

  const firstRadioButtons: HTMLInputElement[] = problemSections.map(
    (problemSection) =>
      problemSection.querySelector("input") as HTMLInputElement,
  );

  const areAllButtonsClicked = ():boolean=>{
    return firstRadioButtons.every(firstRadioButton=>!firstRadioButton.validity.valueMissing)
  }

  const setUpQuiz = (problems: Problem[]) => {
    problemSections.forEach((problemSection, index) => {
      const heading = problemSection.querySelector("h1") as HTMLHeadingElement;
      const inputs = Array.from(
        problemSection.querySelectorAll("input"),
      ) as HTMLInputElement[];
      const labels = Array.from(
        problemSection.querySelectorAll("label"),
      ) as HTMLLabelElement[];

      heading.textContent = problems[index].word;
      inputs.forEach(
        (input, i) => (input.value = problems[index].possibleAnswers[i]),
      );
      labels.forEach(
        (label, i) => (label.textContent = problems[index].possibleAnswers[i]),
      );
    });
    eventEmitter.emitEvent("setUpFinished");
    console.log(problemSections);
  };

  return { problemSections, setUpQuiz, areAllButtonsClicked };
})();

export default problemSections;
