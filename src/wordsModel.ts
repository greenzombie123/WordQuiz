import eventEmitter from "./eventEmitter";
import { ProblemData } from "./warningBox";

const words: string[] = ["student", "block", "ice", "people"];
const apiKey = "f478540c-c173-4512-b3fd-df91f342a25a";

export type Problem = {
  word: string;
  possibleAnswers: string[];
  answer: string;
  isUserCorrect: boolean;
};

type WordData = {
  meta: {
    id: string;
  };
  hom: number;
  fl: string;
  shortdef: string[];
};

type WordDataArray = WordData[];

let problems: Problem[] = [];

let mockWordDataArrayList: WordDataArray[] = [
  [
    {
      meta: {
        id: "r",
      },
      hom: 1,
      fl: "r",
      shortdef: ["sjiojsdfjsa sddf a fa daslfj j oifj ofw1"],
    },
  ],
  [
    {
      meta: {
        id: "r",
      },
      hom: 1,
      fl: "r",
      shortdef: ["2"],
    },
  ],
  [
    {
      meta: {
        id: "r",
      },
      hom: 1,
      fl: "r",
      shortdef: ["3e eife f wf iwie ffwifw w fewifw fwifw l"],
    },
  ],
  [
    {
      meta: {
        id: "r",
      },
      hom: 1,
      fl: "r",
      shortdef: ["4"],
    },
  ],
];

function createProblems(
  words: WordDataArray[],
  dictionaryWords: string[],
): Problem[] {
  console.log(words[0]);

  //TODO Create function that randomizes the possible answers
  const possibleAnswers: string[] = [
    words[0][0].shortdef[0],
    words[1][0].shortdef[0],
    words[2][0].shortdef[0],
    words[3][0].shortdef[0],
  ];

  const problems: Problem[] = words.map((word, index) => {
    return {
      word: dictionaryWords[index],
      possibleAnswers,
      answer: word[0].shortdef[0],
      isUserCorrect: false,
    };
  });

  return problems;
}

function setProblems(newProblems: Problem[]) {
  problems = [...newProblems];
}

function resetProblems(){
  const resetProblems = problems.map((problem) => {
    return {
      word: problem.word,
      possibleAnswers: problem.possibleAnswers,
      answer: problem.answer,
      isUserCorrect: false,
    };
  });

  setProblems(resetProblems)
}

function randomizeProblems(){
  let currentProblems:Problem[] = [...problems]
  const newProblems:Problem[] = []
  for (let index = 0; index < 4; index++) {
      const ranNum = Math.floor(Math.random() * currentProblems.length)
      const newProblem:Problem = currentProblems[ranNum]
      newProblem.possibleAnswers = randomizePossibleAnswers(newProblem.possibleAnswers)
      newProblems.push(newProblem)
      currentProblems = currentProblems.filter(p=>p.word !== newProblem?.word)
  }
  setProblems(newProblems)
}

function randomizePossibleAnswers(answers:string[]):string[]{
  let currentAnswers:string[] = [...answers]
  const newAnswers:string[] = []
  for (let index = 0; index < 4; index++) {
    const ranNum = Math.floor(Math.random() * currentAnswers.length)
    newAnswers.push(currentAnswers[ranNum])
    currentAnswers = currentAnswers.filter(a=>a !== currentAnswers[ranNum])
  }
  return newAnswers
}

function updateProblems(problemData: ProblemData[]) {
  const updatedProblems:Problem[] = problems.map((problem, index) => {
    return {
      word: problem.word,
      possibleAnswers: problem.possibleAnswers,
      answer: problem.answer,
      isUserCorrect: problemData[index].chosenAnswer === problem.answer,
    };
  });

  setProblems(updatedProblems)
}

function getProblems(){
  return problems
}

async function fetchWords() {
  let promises: Promise<WordDataArray>[] = [];

  //! DO NOT DELETE. Commented out to use mock promises array
  // promises = words.map(async (word, index) => {
  //   const promise = await fetch(
  //     `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${apiKey}`,
  //   );
  //   const data:WordDataArray = await promise.json();

  //   return data;

  // });

  promises = mockWordDataArrayList.map(async (w: WordDataArray) => {
    return w;
  });

  Promise.all(promises).then((wordDataArrayList: WordDataArray[]) => {
    const problems = createProblems(wordDataArrayList, words);
    setProblems(problems);
    eventEmitter.emitEvent("problemsCreated", problems);
  });
}

const model = {
  fetchWords,
  resetProblems,
  updateProblems,
  getProblems,
  randomizeProblems
};

export default model;
