// matches a number, some characters and another number
let reg = /\d.*\d/
let str = "Java3foobar4Script"
let newStr = str.replace(reg, "-");
console.log(newStr);
// "Java-Script"

reg = /\d{3}/g
str = "Java323Scr995ip4894545t";
newStr = str.replace(reg, "");
console.log(newStr);
// JavaScrip5t
// 5 didn't pass the test