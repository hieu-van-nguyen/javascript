const validAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    return reorder(s) === reorder(t);
}

const reorder = (s) => {
    return s.split('').sort((a, b) => a.localeCompare(b)).join('');
}

console.log(validAnagram("abc", "cba")); // true
console.log(validAnagram("abc", "cbad")); // false
console.log(validAnagram("abc", "dba")); // false

console.log("---------------------------------------------------------------");

const validAnagram_V2 = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    const freq = new Map();
    for (const c of s) {
        const count = (freq.get(c) || 0) + 1;
        freq.set(c, count);
    }

    for (const c of t) {
        if (freq.has(c)) {
            const count = freq.get(c) - 1;
            if (count < 0) return false;
            freq.set(c, count);
        }
    }

    for (const [c, count] of freq) {
        if (count !== 0) {
            return false;
        }
    }

    return true;

}

console.log(validAnagram_V2("abc", "cba")); // true