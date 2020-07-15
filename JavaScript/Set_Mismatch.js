/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let map = {};    
    let result = [];
    let idx = 1;
    
    for(let i=0; i<nums.length; i++) {
        if(!map[nums[i]])
           map[nums[i]] = 1;
        else {
            map[nums[i]] ++;
            result.push(nums[i]);
        }
    }
    
    while(idx <= nums.length) {
        if(!map[idx]) {
            result.push(idx);
            return result;
        } 
        idx++;
    }
};


