/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let answer = [];
    
    for (let i=0; i<nums1.length; i++) {
        for (let j=0; j<nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                let boo = true;
                
                for (let z=j+1; z<nums2.length; z++)
                    if (nums2[z] > nums1[i]) {
                        answer.push(nums2[z])
                        boo = false;
                        break;
                    }
                
                if (boo) answer.push(-1)
            }
        }
    }
    
    return answer;
};