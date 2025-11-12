var a = function(param) {
    var b = function(input) {
        return input * 2;
    }
    return b(param);
}
console.log(a(2)); // 4
console.log(a(8)); // 16