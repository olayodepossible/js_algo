/* 
Binary search implementation
* Let min = 0 and max = arr.len - 1
* Compute guess as the average of max and min, rounded down so that it is an integer.
* if array[guess] equals target, then stop. You found it! Return guess.
* If the guess was too low, that is, array[guess] < target, then set min = guess + 1
* Else the guess was too high, Set max = guess -1.
* Go back to step two above 
*/

const arr = [1,20,3,44,5,16,7,8];
let targetNum = 8

const binarySearch = (arr, n) => {
    let arrSort = arr.sort()
    let len = arr.length;
    let max = len - 1;
    let min = 0;
    let guess;
    let step = 0;

    while (max >= min) {
        console.log("step --> ",step)
        guess = Math.floor((max + min)/2) ;
        step++;

        if(arrSort[guess] == n){
            return (`${step} step(s) Required and its index is ${guess}`);
        }
        else if (arrSort[guess] > n) {
            max = guess - 1           
        } 
        else {
            min = guess + 1;
        }
    } 
    return -1;

}

const search1 = (arr, n) => {
    let arrSort = arr.sort()
    let start = 0
    let end = arrSort.length
    let x = end / 2
    while (end > start) {
        if (arrSort[x] == n) return x;

        if (arrSort[x] > n) {
            end = x - 1
            if (end < start) break;
            x = (x - start)/2
            
        } else {
            start = x + 1
            if (start > end) break;
            x = (end - x)/2
        }
    }

}

const binarySearchReturnIndex = (arr, n) => {
    let arrSort = arr.sort();
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((max + min)/2) ;

        if(arrSort[mid] > n){
            right = mid;
        }
        else {
            left = mid + 1;
        }
    } 
    return left;

}



const r1 = binarySearch(arr, targetNum)
// const r2 = search1(arr, targetNum)
console.log("r1 --> ", r1);
// console.log("r2 --> ", r2);
