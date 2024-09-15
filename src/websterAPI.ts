const words: string[] = ["school", "block", "ice", "people"];
const apiKey = "f478540c-c173-4512-b3fd-df91f342a25a";

export type Word = {
  word: string;
  definition: string;
};

export default async function getWords() {
  let promises: Promise<Word>[] = [];

  promises = words.map(async (word) => {
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

// getWords(words)


