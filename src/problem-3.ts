function countWordOccurrences(sentence: string, word: string): number {
  const wordsArray = sentence.toLowerCase().split(" ");
  const targetWord = word.toLowerCase();
  return wordsArray.filter((w) => w === targetWord).length;
}

console.log(countWordOccurrences("I love typescript", "typescript"));