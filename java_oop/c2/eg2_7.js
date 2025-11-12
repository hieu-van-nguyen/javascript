function f() {
    const a = [];
    for (let i = 0; i < 3; i++) {
        a[i] = (function(x) {
            return function() {
                return x;
            }
        })(i);
    }
    return a;
}

const a = f();
console.log(a[0]());
console.log(a[1]());
console.log(a[2]());