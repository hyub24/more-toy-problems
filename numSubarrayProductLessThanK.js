/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // declare array and product and count
    // loop through array
    // if num is greater than k, reset array and product and continue
    // push in current number and calculate product
    // if product is less than k then add array length to count
    // else unshift until product is less than k and then add array length to count
    // return count
    
    let arr = [];
    let product = 1;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= k) {
            arr = [];
            product = 1;
            continue;
        } else {
            arr.push(nums[i]);
            product = product * nums[i];
            if (product < k) count += arr.length;
            else {
                while (product >= k) {
                    product = product / arr.shift();
                }
                count += arr.length;
            }
        }
    }
    return count;
};

