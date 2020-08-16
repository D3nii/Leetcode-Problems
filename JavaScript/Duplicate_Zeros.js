/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == 0) {
            move(arr, i, arr.length);
            console.log(arr);
            i++;
        }
    }
};

var move = function(arr, left, right) {
    for (let i = right - 1; i >= left; i--) {
        arr[i+1] = arr[i];
    }
    
    while (arr.length > right) {
        arr.pop();
    }
}