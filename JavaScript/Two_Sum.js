/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {
    var answer = [];
    var temp;
    
    for (let i=0; i<nums.length-1; i++) {
        temp = nums[i];
        
        for (let j=i+1; j<nums.length; j++) {
            if (temp + nums[j] === target) {
                answer.push(i);
                answer.push(j);
                break;
            }
        }
    }
    
    return answer;
};