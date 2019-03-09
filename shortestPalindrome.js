/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const findPal = (str) => {
        let left = 0;
        let right = str.length - 1;
        while(left <= right) {
            if (str[left] !== str[right]) return false;
            left = left + 1;
            right = right - 1;
        }
        return true;
    }
    let index;
    for (let i = 0; i < s.length; i++) {
        if (findPal(s.slice(0, s.length - i))) {
            index = s.length - i;
            break;
        }
    }
    if (index === undefined) index = 0;
    let append = '';
    for (let i = s.length - 1; i >= index; i--) {
        append += s[i];
    }
    return append + s;
};

//number 214
//dont need to pass in slice strings to findPal function
// can just pass in indexes