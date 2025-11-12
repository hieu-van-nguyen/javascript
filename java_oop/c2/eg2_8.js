function f() {
    function makeClosure(x) {
        return function() {
            return x;
        }
    }
    const a = [];
    for (let i = 0; i < 3; i++) {
        a[i] = makeClosure(i);
    }
    return a;
}

const a = f();
console.log(a[0]());
console.log(a[1]());
console.log(a[2]());