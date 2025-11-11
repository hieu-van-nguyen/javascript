const firstRepeatingCharacter = (str) => {
    for (let i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        if (str.indexOf(c) !== str.lastIndexOf(c)) {
            return c;
        }
    }
    return '';
}

const firstNonRepeatingCharacter = (str) => {
    for (let i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        if (str.indexOf(c) === str.lastIndexOf(c)) {
            return c;
        }
    }
    return '';
}

console.log(firstRepeatingCharacter("123455")); // 5
console.log(firstNonRepeatingCharacter("123455")); // 1