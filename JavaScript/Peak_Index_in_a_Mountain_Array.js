/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {    
    if (A.length < 3) return null;
        
    let temp = Math.max(...A);

    for (let i=0; i<A.length; i++)
        if (A[i] == temp) return i;
};