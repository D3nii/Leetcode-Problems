/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let sum = [], answer = 0;
    
    ops.forEach(i => {
        if(Number.isInteger(+i)) {
            sum.push(+i);
        }
        else if (i == 'C') {
            sum.pop();
        }
        else if (i == 'D') {
            let temp = sum[sum.length-1] * 2;
            sum.push(temp);
        }
        else if (i == '+') {
            let temp = sum[sum.length-1] + sum[sum.length-2];
            sum.push(temp);
        }
    })
        
    return sum.reduce((i, j) => i+j, 0);
};