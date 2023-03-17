import { ArrayOfWords } from "../data";

// Generate a random seed phrase of a given length

 export default function GenerateSeedPhrase(length) {

    let seedPhrase = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * ArrayOfWords.length);
      seedPhrase += ArrayOfWords[index] + ' ';
    }
    return seedPhrase.trim();
  }

  // Outputs a random seed phrase with 12 words
  // console.log(GenerateSeedPhrase(12));

  const seed = GenerateSeedPhrase(12);
  const phrase = seed.split(' ');
  const result = phrase.join(', ');
  export const word = result.split(', ');

