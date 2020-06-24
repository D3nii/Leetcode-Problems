/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    N = N.toString(2);
    let counter = 0, max = 0;
    
    for (let i=0; i<N.length; i++) {
        if (N[i] == '0') counter ++;
        
        if (N[i] == '1') {
            if (max < counter) max = counter;
            counter = 1;
        }
    }
        
    return max;
};