/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 1) return true;
    
    for (let i=1; i<=n/2; i++)
        if (n / (Math.pow(2, i)) == 1) {
            console.log(i);
            return true;
        } else if (Math.pow(2, i) > n) break;
    
    return false;
};