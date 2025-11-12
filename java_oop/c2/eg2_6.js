function f() {
    var b = "b";
    return function() {
        return b;
    }
}

const n = f();
console.log(n()); // b