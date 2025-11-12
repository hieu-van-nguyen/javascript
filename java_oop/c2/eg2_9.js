let getValue, setValue;
(function() {
    let secret = 0;
    getValue = function() {
        return secret;
    };
    setValue = function(v) {
        secret = v;
    }
})();

console.log(getValue()); // 0
setValue(123);
console.log(getValue()); // 123