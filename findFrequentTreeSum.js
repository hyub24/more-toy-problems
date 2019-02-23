/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    if (!root) return [];
    let result = [];
    let sums = {};
    let mostFrequent = 0;
    const recurse = (node) => {
        if (!node) return 0;
        let sum = node.val + recurse(node.left) + recurse(node.right);
        if (sums[sum]) sums[sum] += 1;
        else sums[sum] = 1;
        if (sums[sum] > mostFrequent) mostFrequent += 1;
        return sum;
    }
    recurse(root);
    for (let key in sums) {
        if (sums[key] === mostFrequent) result.push(key);
    }
    return result;
};

//recursion for the win