const findMissingNum = arr => {
    const { length } = arr;
    // sort the array TODO

    for (let i = 0; i < length; i++) {
        if (arr[i] +1 != arr[i+1]) {
           return arr[i] + 1;
        }
        
    }
    return false;
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