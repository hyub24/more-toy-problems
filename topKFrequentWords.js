/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {};
    for (let i = 0; i < words.length; i++) {
        if (obj[words[i]] === undefined) obj[words[i]] = 1;
        else obj[words[i]]++;
    }
    let result = Object.entries(obj);
    result.sort((a, b) => {
        if (a[1] < b[1]) return 1;
        else if (a[1] > b[1]) return -1;
        else {
            if (a[0] < b[0]) return -1;
            else if (a[0] > b[0]) return 1;
        }
        return 0;
    })
    let answer = [];
    for (let i = 0; i < k; i++) {
        answer.push(result[i][0]);
    }
    return answer;
};