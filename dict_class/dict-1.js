/*

setup(input)
isInDict(word)  //bool


setup(["cat", "car", "bar"])
isInDict('cat')  //true
isInDict('don')  //false

**** wilcard ***
isInDict('*at') // true
isInDict('cr*') // false

*/


class Dictionary{
    constructor(wordsArr){
        const wordMap = wordsArr.reduce((acc, word) => {
            acc[word] = word;
            return acc
        }, {})
        this.dict = wordMap;
    }

    isInDict(word){
        if (this.dict[word]  !== underfined) {
            return true;
        }

        if (!word.inccludes('*')) {
            return true;
        }
        return this.dict.some((dictWord) => {
            const regexTemplate = word.replace('*', '.');
            const regex = new RegExp(`^${regexTemplate}$`);
            return regex.test(dictWord);
        });
    }

    isInDict_1(word){
        return this.dict.inccludes(word);
    }
}

const wordsArray = ["cat", "car", "bar"]
const test = new Dictionary(wordsArray)
console.log(test.isInDict('cat'));
console.log(test.isInDict('*at'));