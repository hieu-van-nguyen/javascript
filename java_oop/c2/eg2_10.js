function iterator(arr) {
    let i = 0;
    return function() {
        return arr[i++];
    }
}

const next = iterator(['a', 'b', 'c']);
console.log(next()); // a
console.log(next()); // b
console.log(next()); // c