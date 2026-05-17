function deleteElement(arr, index) {
    var i = index;
    var n = arr.length;
    while (i < n - 1) {
        arr[i] = arr[i + 1];
        i++;
    }
    arr.length = n - 1;
    return arr;
}

console.log(deleteElement([1, 2, 3, 4, 5, 6], 3)); // [1, 2, 3, 5, 6]
