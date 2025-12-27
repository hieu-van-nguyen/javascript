function outer() {
    const outerVar = "Hello";

    function inner() {
        console.log(outerVar);
    }

    return inner;
}

const closureFn = outer();
closureFn();

