/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    const recurse = (node) => {
        if (!node) return 0;
        let sum1 = 0;
        let sum2 = 0;
        sum1 += node.val;
        if (node.left) {
            sum1 += recurse(node.left.left);
            sum1 += recurse(node.left.right);
            sum2 += recurse(node.left);
        }
        if (node.right) {
            sum1 += recurse(node.right.left);
            sum1 += recurse(node.right.right);
            sum2 += recurse(node.right);
        }
        return Math.max(sum1, sum2);
    }
    return recurse(root);
};

// dp to speed up
// 337