// Received Sentence
var sentence = 'My dog ate something on the floor yesterday';
// Run Program
spinWords(sentence);

// ================SUBMISSION=======================27-Lines============
function spinWords(sentence) {
  const sentenceList = sentence.split(' ');
  const hotList = sentenceList.filter(word => word.length >= 5);
  const hotIndexList = hotList.map(word => sentenceList.indexOf(word));

  newSentenceList(sentenceList, hotIndexList, hotList);

  const newSentence = sentenceList.join(' ');
  // console.log(newSentence);
  return newSentence;
} // SpinWords

function newSentenceList(sentenceList, indexList, list) {
  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    const index = indexList[i];
    const reverseWord = word
      .split('')
      .reverse()
      .join('');
    replaceWord(sentenceList, index, reverseWord);
  }
}

function replaceWord(sentenceList, index, spinWord) {
  sentenceList.splice(index, 1, spinWord);
  return sentenceList;
}