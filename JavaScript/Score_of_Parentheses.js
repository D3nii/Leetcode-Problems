/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let temp = [0];
    
    for (let i=0; i<S.length; i++) {
        if (S[i] == '(') 
            temp.push(0);
        else {
            let p = temp.pop();
            temp[temp.length-1] += Math.max(2 * p, 1);
        }
    }
    
    return temp.pop();
};