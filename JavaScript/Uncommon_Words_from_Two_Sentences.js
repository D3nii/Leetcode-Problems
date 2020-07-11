/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    
    let arr = A.concat(" ", B).split(" ");
    
    let temp = [];
    
    for (let i=0; i<arr.length; i++) {
        if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]))
            temp.push(arr[i]);
    }
    
    return temp;
};