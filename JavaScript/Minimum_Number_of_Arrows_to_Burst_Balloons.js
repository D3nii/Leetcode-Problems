/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let temp = -Infinity;
    let count = 0;
    points.sort((a, b) => a[1] - b[1]);
    
    for (i of points) {
        if (temp < i[0]) {
            count++;
            temp = i[1];
        }  
    }
        
    return count;
};