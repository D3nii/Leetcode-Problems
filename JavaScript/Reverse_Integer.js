/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    let temp = [];
    let answer;
    let neg = false;
    let limit = Math.pow(2, 31);
    
    if (x < 0) {
        neg = true;
        x *= -1;
    }
    
    while (x >= 10) {
        temp.push(Math.floor(x % 10));
        x = Math.floor((x / 10));
    } 
    temp.push(x);
    
    answer = Number(temp.join(''));
    
    if (answer > limit-1 || answer < (limit*-1)) {
        return 0;
    }
    
    if (neg) return answer*-1;
    else return answer;
};