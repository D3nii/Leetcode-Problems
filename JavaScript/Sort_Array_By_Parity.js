/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let Answer = [];
    
    for (let i=0; i<A.length; i++) {
        if (A[i] % 2 == 0) {
            Answer.push(A[i]);
            A.splice(i, 1);
            i--;
        }
    }
    
    for (let i=0; i<A.length; i++) {
        Answer.push(A[i]);
    }
    
    return Answer;
};