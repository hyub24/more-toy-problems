/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) return [];
    let result = [];
    for (let i = 0; i <= nums.length - k; i++) {
        result.push(Math.max(...nums.slice(i, i + k)));
    }
    return result;
};

// works but not the fastest
// not too hard in javascript