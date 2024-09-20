const words: string[] = ["school", "block", "ice", "people"];
const apiKey = "f478540c-c173-4512-b3fd-df91f342a25a";

type Problem = {
  word: string;
  possibleAnswers: string[];
  answer: string;
  isUserCorrect: boolean;
};

type WordData = [
  {
    meta: {
      id: string;
    };
    hom: number;
    fl: string;
    shortDef: string[];
  },
];

let problems: Problem[] = [];

function createProblems(words: WordData[], dictionaryWords:string[]): Problem[] {
  const possibleAnswers = [
    words[0][0].shortDef[0],
    words[1][0].shortDef[0],
    words[2][0].shortDef[0],
    words[3][0].shortDef[0],
  ];

  const problems: Problem[] = words.map((word, index) => {
    return {
      word: dictionaryWords[index],
      possibleAnswers,
      answer: word[0].shortDef[0],
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
  let promises: Promise<WordData>[] = [];

  promises = words.map(async (word) => {
    const promise = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${apiKey}`,
    );
    const data = await promise.json();

    return data
  });

  Promise.all(promises).then((words) => {
    console.log(words);
  });
}

function setUpProblems(wordData:WordData[]){

}

const model = {
  fetchWords, resetProblems
}

export default model
