/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0, temp = 0;
    
    for (let i in nums) {
        temp = 0;
        
        while (nums[i] >= 1) {
            nums[i] /= 10;
            temp++;
        }
        
        if (temp % 2 == 0) {
            count++;
        }
    }
    
    return count;
};