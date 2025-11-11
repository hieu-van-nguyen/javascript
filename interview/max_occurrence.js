const maxOccurrence = (str) => {
    let max = 0;
    let maxChar = '';
    str.split('').forEach(char => {
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
}

console.log(maxOccurrence("Hello World!"));