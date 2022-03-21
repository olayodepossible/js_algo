



const findMissingNum = arr => {
    const { length } = arr;
    // sort the array 
    arr.sort((a, b) => a - b);
    for (let i = 0; i < length; i++) {
        if (arr[i] +1 != arr[i+1]) {
           return arr[i] + 1;
        }
        
    }
    return false;

    // sort object
/*
    Object.sort((a, b) => {
        let keyA = a.val1 + a.val2;
        let keyB = b.val1 + b.val2;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
    */
}


const findDuplicate = arr => {
    const { length } = arr;
    const observerved = {}

    for (let i = 0; i < length; i++) {
        if (observerved[arr[i]]) {
           return arr[i];
        }
        observerved[arr[i]] = arr[i]
        
    }
    return false;
}