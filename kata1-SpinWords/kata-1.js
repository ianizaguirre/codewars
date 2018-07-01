var receivedSentence = "My dog ate something on the floor yesterday";

const sentenceList = receivedSentence.split(' ');
// console.log(sentenceList);

const hotList = sentenceList.filter(word => word.length >= 5);
// console.log(hotList);


const hotIndexList = hotList.map(word => sentenceList.indexOf(word));
// console.log(hotIndexList);



var newArray = [...sentenceList];
// console.log(newArray);


function replaceWord(index, spinWord) {
  newArray.splice(index, 1, spinWord);
  return newArray
}

//replaceWord(1, "hi");


console.log(hotList);
console.log(hotIndexList);
console.log(newArray);



for (let i = 0; i < hotList.length; i++) {
  // console.log(i);
  const word = hotList[i]
  // console.log(word);

  const index = hotIndexList[i]
  // console.log(index);

  const reverseWord = word.split('').reverse().join('');
  // console.log(reverseWord);

  replaceWord(index, reverseWord);
}



console.log(newArray);



const newSentence = newArray.join(' ')
console.log(newSentence);



//======== Solutions I like
// https://www.codewars.com/kata/reviews/5264d41ce218b86cb90000df/groups/526b93e72368672a19000113
// // Received Sentence
// var sentence = 'My dog ate something on the floor yesterday';
// // Run Program
// const result = spinWords(sentence);
// console.log(result);

// function spinWords(words) {
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }