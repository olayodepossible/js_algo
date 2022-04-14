function countCharacters(str) {
  let characterCount = {};
  str = str.replace(/[\W]+/gi, "").toLowerCase();
  for (let char of str) {
    if (characterCount.hasOwnProperty(char)) characterCount[char] += 1;
    else characterCount[char] = 1;
  }
  return characterCount;
}
