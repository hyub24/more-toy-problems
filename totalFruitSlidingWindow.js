/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    let fruits = 0;
    let end = 0;
    let current = [];
    let obj = {};
    obj.length = 0;
    while(end < tree.length) {
        if (obj[tree[end]] === undefined) {
            if (obj.length !== 2) {
                obj[tree[end]] = true;
                obj.length += 1;
            } else {
                if (fruits < current.length) fruits = current.length;
                let fruit = current[current.length - 1];
                let index;
                for (let i = current.length - 2; i >= 0; i--) {
                    if (current[i] !== fruit) {
                        index = i + 1;
                        break;
                    }
                }
                current = current.slice(index);
                obj = {};
                obj.length = 2;
                obj[tree[end]] = true;
                obj[current[0]] = true;
            }
        }
        current.push(tree[end]);
        end++;  
    }
    if (current.length > fruits) fruits = current.length;
    return fruits;
};

// sliding window problem O(n)
// brute force was O(n^2)