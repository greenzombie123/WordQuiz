const words: string[] = ["school", "block", "ice", "people"];
const apiKey = "f478540c-c173-4512-b3fd-df91f342a25a";

type DictionaryWord = {
  word: string;
  definition: string;
};

const dictionaryWords: DictionaryWord[] = [];

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

function setDictionaryWords(word: DictionaryWord) {
  dictionaryWords.push(word);
}

function createDictionaryWord(data: any[], word: string): DictionaryWord {
  let firstWord = data[0];

  let definition: string = firstWord.shortdef[0];

  return { word: word, definition };
}

function createProblems(words: DictionaryWord[]): Problem[] {
  const possibleAnswers = [
    words[0].definition,
    words[1].definition,
    words[2].definition,
    words[3].definition,
  ];

  const problems: Problem[] = words.map((word) => {
    return {
      word: word.word,
      possibleAnswers,
      answer: word.definition,
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
