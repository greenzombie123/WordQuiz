import { Problem } from "./wordsModel";

const resultSection = (() => {
  const resultSection = document.querySelector(".resultSection") as HTMLElement;

  const wordCells: HTMLElement[] = Array.from(
    resultSection.querySelectorAll(".word"),
  );

  const resultCells: HTMLElement[] = Array.from(
    resultSection.querySelectorAll(".result"),
  );

  const answerCells: HTMLElement[] = Array.from(
    resultSection.querySelectorAll(".correctAnswer"),
  );

  const scoreCell = document.querySelector(".score") as HTMLElement;

  const setUp = (problems: Problem[]) => {
    problems.forEach((problem, index) => {
      wordCells[index].textContent = problem.word;
      resultCells[index].classList.remove("wrong");
      resultCells[index].classList.remove("correct");
      resultCells[index].classList.add(getResult(problem.isUserCorrect));
      answerCells[index].textContent = getAnswers(problem);
      console.log(1);
    });

    setScore(problems);
  };

  const getResult = (isUserCorrect: boolean) =>
    isUserCorrect ? "correct" : "wrong";

  const getAnswers = ({
    answer,
    isUserCorrect,
  }: {
    answer: string;
    isUserCorrect: boolean;
  }) => (isUserCorrect ? "" : answer);

  const setScore = (problems: Problem[]) => {
    let score: number = problems.reduce(
      (currentScore, currentProblem) =>
        currentProblem.isUserCorrect ? currentScore : currentScore - 1,
      4,
    );

    scoreCell.textContent = `${score}/4`;
  };

  return { setUp };
})();

export default resultSection;
