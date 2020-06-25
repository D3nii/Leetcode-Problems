/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length == 0) return 0;
    let count = 0;
    let map = {};
    
    for (let i=0; i<nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 1;
        else map[nums[i]] ++;
    }
    
    for (num in map)
        if (map[num] == 1) return num;
};