var obj = {
    num: 2
};
var obj2 = {
    num: 5
};

var addToThis = function(a, b, c) {
    return this.num + a + b + c;
};

console.log(addToThis.call(obj, 1, 2, 3)); // call attached the function to the object

var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr)); // apply attached the function to the object, arguments are passed as an array
console.log(addToThis.apply(obj2, arr));

var bound = addToThis.bind(obj);
console.dir(bound);
console.log(bound(1, 2, 3));
