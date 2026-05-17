var addTo = function(passed) {
    var add = function(inner) {
        return passed + inner;
    };

    return add;
}

var add3 = addTo(3);
console.dir(add3);
console.log(add3(2));

var add4 = addTo(4);
console.dir(add4);
console.log(add4(2));
