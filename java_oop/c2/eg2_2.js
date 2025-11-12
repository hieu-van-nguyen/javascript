function invoke_and_add(a, b) {
    return a() + b();
}

function one() {
    return 1;
}

function two() {
    return 2;
}

console.log(invoke_and_add(one, two)); // 3

console.log(invoke_and_add(function() { return 1; }, function() { return 2; })); // 3