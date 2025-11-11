
const originalString = "Hello, World!";

// Extract from index 0 up to (but not including) index 5
const part1 = originalString.slice(0, 5); // Returns "Hello"
console.log(part1);

// Extract from index 7 to the end of the string
const part2 = originalString.slice(7); // Returns "World!"
console.log(part2);

// Extract using negative startIndex (counts from the end)
const part3 = originalString.slice(-6); // Returns "World!" (starts 6 characters from the end)
console.log(part3);

// Extract using negative endIndex (counts from the end)
const part4 = originalString.slice(0, -7); // Returns "Hello," (ends 7 characters from the end)
console.log(part4);

// If startIndex is greater than or equal to endIndex, an empty string is returned
const emptyString = originalString.slice(5, 0); // Returns ""
console.log(emptyString);