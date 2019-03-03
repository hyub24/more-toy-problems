/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //declare right product array as nums
    //loop through array backwards calculating right product
    //loop through array forwards calculating left product and multiplying with right
    //product array
    //return new array
    let right = nums.slice();
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i] * right[i + 1];
    }
    let left = 1;
    let current;
    for (let i = 0; i < nums.length; i++) {
        current = nums[i];
        if (i + 1 !== nums.length) nums[i] = left * right[i + 1];
        else nums[i] = left;
        left = left * current;
    }
    return nums;
};

// linear time

