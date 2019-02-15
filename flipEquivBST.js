/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1) return false;
    if (!root2) return false;
    let obj1 = {};
    let obj2 = {};
    const recurse = (node, obj) => {
        if (node.right && node.left) {
            if (node.right.val > node.left.val) {
                obj[node.val] = [node.left.val, node.right.val];
            } else {
                obj[node.val] = [node.right.val, node.left.val];
            } 
        } else if (node.right) obj[node.val] = [node.right.val];
        else if (node.left) obj[node.val] = [node.left.val];
        else obj[node.val] = [null];
        if (node.left) recurse(node.left, obj);
        if (node.right) recurse(node.right, obj);
    }
    recurse(root1, obj1);
    recurse(root2, obj2);
    const check = (obj1, obj2) => {
        for (let key in obj1) {
            for (let i = 0; i < obj1[key].length; i++) {
                if (obj1[key][i] !== obj2[key][i]) return false;
            }
        }
        return true;
    }
    return check(obj1, obj2);
};