/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let answer = 0;
    
    let n = x ^ y;
    
    while(n != 0) {
        if (n % 2 == 1) 
            answer++;
        n = n >> 1;
    }
    return answer;
};