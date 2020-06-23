/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let duplicate;
    let counter = 0;
    let bool = false;
    
    for (let i=0; i<nums.length; i++) {
        duplicate = nums[i];
        for (let j=i+1; j<nums.length; j++) {
            if (duplicate === nums[j]) {
                counter++;
                bool = true;
            }    
        }
        if (bool) nums.splice(i, counter);
        bool = false
        counter = 0;
    }
    return nums.length;
};