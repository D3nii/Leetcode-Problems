/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    /**
 * @param {number} x
 * @return {number}
 */
    let temp = [];
    
    if (x < 0) return false;
    
    while (x >= 10) {
        temp.push(Math.floor(x % 10));
        x = Math.floor((x / 10));
    } 
    temp.push(x);
        
    for (let i=0; i<temp.length/2; i++) {
        if (temp[i] !== temp[temp.length-i-1]) return false;
    } return true;
};

