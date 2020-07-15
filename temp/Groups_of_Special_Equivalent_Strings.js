/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    let temp = new Set();
    
    for (x of A) {
        let odd = [];
        let even = [];
        
        for (i = 0; i < x.length; i++)
            if (i % 2 == 0) even.push(x[i]);
            else odd.push(x[i]);
        
        x = odd.sort() + even.sort();
        
        if (!temp.has(x)) temp.add(x);
    }
    
    return temp.size;
};