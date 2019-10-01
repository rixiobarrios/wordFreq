const findWordFrequencies = (str) => {
  let arr = str.split(' ');
  let obj = {};

  for (word of arr) {
    word = word.toLowerCase()
    if(obj[word]){
      obj[word] += 1
    }
    else {
      obj[word] = 1
    }
  }

  return obj
}

console.log(findWordFrequencies("Hello I am a star and I like to say hello yo hello"));


const findHighestFrequency = (obj) => {
  let highestFreq = {}
  let highest = 0

  for (word in obj) {
    if(obj[word] > highest){
      highest = obj[word]
    }
  }

  for(word in obj){
    if(obj[word] == highest){
      highestFreq[word] = highest
    }
  }
  return highestFreq
}

const freqs = findWordFrequencies('The world is is is is all that is the case');

console.log(findHighestFrequency(freqs));
