const str = "talentupafrica"
const longestSubstring = (str) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let set = new Set([char])

        for (let j = 0; j < str.length; j++) {
            let ch = str.charAt(j);
            if (set.has(ch)) break;
            else set.add(ch)
            count = Math.max(count, set.size)
        }
        
    }
    return count;
}

const longestSubstring2 = (str) => {
    let count = 0;
    let left = 0;
    let right = 0;
    let strLen = str.length;
    let set = new Set();

    while (left < strLen && right < strLen) {
        let char = str.charAt(right)
        if (!set.has(char)) {
            set.add(char)
            right++
            count = Math.max(count, right - left)
        } else {
            set.delete(str.charAt(left))
            left++
        }
    }

    return count;
}

const longestSubstring3 = (str) => {
    const map = new Map();
    let max = 0;
    let right = 0;
    let strLen = str.length;

    for (let i = 0; i < strLen; i++) {
        let char = str[i]
        if (map.has(char)) {
            right = Math.max(map.get(char), right)
        }
        max = Math.max(max, i - right + 1)
        map.set(char, i + 1)
    }

    return max;
}



const r1 = longestSubstring(str)
const r2 = longestSubstring2(str)
const r3 = longestSubstring3(str)

console.log("r1 -->", r1);
console.log("r2 -->", r2);
console.log("r3 -->", r3);