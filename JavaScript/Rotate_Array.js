/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    for(let i = 0, j = nums.length - 1; i < k; i++) {
        let x = nums[j];
        nums.pop();
        nums.unshift(x);
    }
    
    return nums;
};