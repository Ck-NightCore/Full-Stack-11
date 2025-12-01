function censonrWord(sentence, wordToCensor){
 

const regex = RegExp(wordToCensor, 'gi');
const censonrText = sentence.replace(regeex, '***')
return censonrText;
}

const originalPost = 'JavaScript is fun, but sometime javascript'
const cleanPost = censonrWord(originalPost, 'javascript');

console.log(cleanPost);