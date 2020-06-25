/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let answer = [];
    let numArr = [];
    let bool = true;
    
    for (let i=left; i<=right; i++) {
        bool = true;
        
        if (i < 10) {
            answer.push(i);
            continue;
        }
        
        numArr = Array.from(String(i), Number);
        
        for (let j=0; j<numArr.length; j++) {
            if (i % numArr[j] !== 0)
                bool = false;
        }
        
        if (bool) 
            answer.push(i);
    }
    
    return answer;
};