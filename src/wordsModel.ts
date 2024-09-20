import eventEmitter from "./eventEmitter";

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
      shortdef: ["1"],
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
      shortdef: ["3"],
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

function resetProblems(problems: Problem[]): Problem[] {
  return problems.map((problem) => {
    return {
      word: problem.word,
      possibleAnswers: problem.possibleAnswers,
      answer: problem.answer,
      isUserCorrect: false,
    };
  });
}

async function fetchWords() {
  let promises: Promise<WordDataArray>[] = [];

  // promises = words.map(async (word, index) => {
  //   const promise = await fetch(
  //     `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${apiKey}`,
  //   );
  //   const data:WordDataArray = await promise.json();

  //   return data;

  // });

  promises = mockWordDataArrayList.map(async (w:WordDataArray)=>{
    return w
  })

  Promise.all(promises).then((wordDataArrayList: WordDataArray[]) => {
    const problems = createProblems(wordDataArrayList, words);
    setProblems(problems);
    eventEmitter.emitEvent("problemsCreated", problems);
  });
}

const model = {
  fetchWords,
  resetProblems,
};

export default model;
