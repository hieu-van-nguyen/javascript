function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("edde"));

function isPalindromeES6(str) {
    return str.split('')
        .every((c, i) => {
            return c === str[str.length - 1 - i];
        });
}

console.log(isPalindromeES6("edde"));