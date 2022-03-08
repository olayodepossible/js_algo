const isPalindrome = (word) => {
  let letters = [];
  let reversedWord = '';

  for (let i = word.length-1; i >= 0 ; i--) {
    reversedWord += word[i]; 
  }

  return (reversedWord === word) ? true : false
    
}

console.log(isPalindrome('racecard'));