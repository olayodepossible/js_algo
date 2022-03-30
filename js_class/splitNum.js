const splitNum = (number) => {
    let a = 0, pow = 0, num = number;

    while (num > 1) {
        let lastDigit = num % 10;
        a += (lastDigit > 1) ? 1 * (10 ** pow) : 2 * (10 ** pow);

        pow++
        num -= lastDigit;
        num /= 10;
    }

    return [a, number - a]
}



console.log(splitNum(200));