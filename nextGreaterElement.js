/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = [];
    for (let i = 0; i < nums1.length; i++) {
        let start = false;
        let found = false;
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) start = true;
            if (start) {
                if (nums2[j] > nums1[i]) {
                    arr.push(nums2[j]);
                    found = true;
                    break;
                }
            }
        }
        if(!found) arr.push(-1);
    }
    return arr;
};