/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    //loop through nums array grab current value
    //loop through rest of array calculating product
    // update final product if ever greater
    //return final product
    let final = nums[0];
    let current;
    for (let i = 0; i < nums.length; i++) {
        current = nums[i];
        if (final < nums[i]) final = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            current = current * nums[j];
            if (current > final) final = current;
        }
    }
    return final;
};

// O(n^2) not sure how to improve time complexity