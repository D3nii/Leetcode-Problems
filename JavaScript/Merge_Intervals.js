/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(x) {
    if (x.length == 0) return [];
    
    x.sort((a, b) => a[0] - b[0]);

    let temp = [x[0]];
        
    for (let i=1; i<x.length; i++) {
        let popped = temp.pop();
        
        if (popped[1] >= x[i][0]) {
            temp.push([ popped[0], Math.max(x[i][1], popped[1]) ]);
        } else {
            temp.push(popped);
            temp.push(x[i]);
        }
    }
    
    return temp;
};