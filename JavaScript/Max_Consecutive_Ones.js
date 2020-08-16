/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let answers = [], count = 0;
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        } else {
            answers.push(count);
            count = 0;
        }
        
        if(i == nums.length-1) answers.push(count);
    }

    return Math.max(...answers);
};