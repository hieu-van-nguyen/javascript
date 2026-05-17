console.log(parseInt('3 mice'));
console.log(parseFloat('3.14 meters'));
console.log(parseInt('12.34'));
console.log(parseInt('0xFF'));

console.log(parseInt('11', 2)); //3
console.log(parseInt('FF', 16)); //255
console.log(parseInt('zz', 36)); //35 * 36 + 35
console.log(parseInt('077', 8)); // 63
console.log(parseInt('077', 10)); //77

console.log(parseInt('eleven')); // NaN
console.log(parseFloat('$72.47')); //NaN
