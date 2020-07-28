/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let arr = [];
    
    for (let i = 0; i <= word1.length; i++) {
        arr[i] = new Array(word2.length+1).fill(0);
        arr[i][0] = i; // Filling a Column
    }
    
    for (let j = 1; j <= word2.length; j++) {
        arr[0][j] = j; // Filling the first row
    }
    
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i-1] == word2[j-1]) {
                arr[i][j] = arr[i-1][j-1];
            } else {
                arr[i][j] = 1 + Math.min(arr[i-1][j-1], arr[i-1][j], arr[i][j-1]);
            }
        }
    }
    
    return arr[word1.length][word2.length];
};