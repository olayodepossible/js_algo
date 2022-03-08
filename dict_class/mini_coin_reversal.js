/*
 * There are N coins, each showing either heads or tails. 
 * Make the coins to form a sequence of alternating heads or tails. 
 * What is the minimum number of coins that must be reversed to achieve this?
 */

/**
 * Reverses a bit. Returns 1 if 0 is provided and vice versa.
 * 
 * @method reverse
 * 
 * @param {number} bit
 * 
 * @returns {number} 
 */
const reverse = (bit) => {
    return bit === 0 ? 1 : 0;
};

/**
 * Gets total number of reversals required if we were to transform provided array into an alternating sequence.
 * 
 * 
 * @method getReversals
 * 
 * @param {array} arr
 * @param {number} expected - 0 or 1
 * 
 * @returns {number}
 */
const getReversals = (arr, expected) => {
    let reversals = 0;

    arr.forEach((digit) => {
        if (expected !== digit) {
            reversals++;
        }

        expected = reverse(expected);
    })

    return reversals;
};

/**
 * Returns minimum number of reversals required to form a sequence of alternating bits
 * 
 * @method getMinimumReversals
 * 
 * @param {array} arr
 * 
 * @returns {number} 
 */
const getMinimumReversals = (arr) => {
    return Math.min(
        getReversals(arr, 0),
        getReversals(arr, 1)
    );
}

console.log(getMinimumReversals([1, 0, 1, 0, 1, 1],));