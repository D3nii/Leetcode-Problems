/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let temp;
    
    for (let i=0; i<nums2.length; i++)
        nums1[m+i] = nums2[i];
    
    var len = nums1.length;
    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(nums1[j-1]>nums1[j]){
                temp = nums1[j-1];
                nums1[j-1] = nums1[j];
                nums1[j] = temp;
            }
        }
    }
    
    return nums1;
};