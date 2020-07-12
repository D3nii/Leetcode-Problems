/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let temp = new Set();
    
    for (let i=0; i<candies.length; i++) {
        temp.add(candies[i]);
        
        if (temp.size == candies.length/2)
            break;
    }
    
    return temp.size;
};