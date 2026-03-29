const isPalindrome = (str) => {
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

console.log(isPalindrome("abcba")); // True
console.log(isPalindrome("abcda")); // False