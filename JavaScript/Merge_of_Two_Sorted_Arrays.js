/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let temp;
    
    for (let i in nums2) {
        nums1.push(nums2[i]);
    }
    
    var len = nums1.length;
    for (var i = len-1; i>=0; i--) {
        for(var j = 1; j<=i; j++) {
            if(nums1[j-1]>nums1[j]) {
                temp = nums1[j-1];
                nums1[j-1] = nums1[j];
                nums1[j] = temp;
            }
        }
    }
    
    if (nums1.length % 2 != 0)
        return nums1[Math.round((nums1.length)/2)-1]
    else {
        return (nums1[Math.round((nums1.length)/2)-1]+nums1[Math.round((nums1.length)/2)])/2
    }
};