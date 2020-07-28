/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length-1;
    
    while (start <= end) {
        let cen = Math.floor((start+end)/2);
        let temp = nums[cen];
        
        if (temp == target) return cen;
        
        else if (temp > target) end = cen - 1;
        else start = cen + 1;
    }
    
    return -1;
};