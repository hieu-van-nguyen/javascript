function insert(arr, index, element) {
    var i = arr.length;
    while (i > index) {
        arr[i] = arr[i - 1];
        i--;
    }
    arr[index] = element;

    return arr;
}

console.log(insert([1, 2, 4, 5, 6], 2, 3)); // [1, 2, 3, 4, 5, 6]
