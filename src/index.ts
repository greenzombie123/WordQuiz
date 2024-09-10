import "./assets/modermNormalize.css";
import "./assets/main.css";

const words: string[] = ["school", "block", "ice", "people"];
const apiKey = "f478540c-c173-4512-b3fd-df91f342a25a";
const quizWords: Words = [];

type Word = {
  word: string;
  definition: string;
};

type Words = Word[];

async function getWords(wordsArray: string[]) {
  let promises: Promise<Word>[] = [];

  promises = wordsArray.map(async (word) => {
    const promise = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${apiKey}`,
    );
    const data = await promise.json();

    const newWord = makeWord(data, word);

    return newWord
  });

  Promise.all(promises).then(words=>{
    console.log(words)
  })
}


function makeWord(wordArray: any[], word:string): Word {
  let firstWord = wordArray[0];

  let definition: string = firstWord.shortdef[0];

  return { word: word, definition };
}

// [ [a,a,a],[b,b,b] ]
getWords(words)
