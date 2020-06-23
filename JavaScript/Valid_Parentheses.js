/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let left = {
        '(': 1,
        '{': 2,
        '[': 3
    };
    
    let right = {
        ')': 1,
        '}': 2,
        ']': 3
    };
    
    let temp = [];
    
    for (let i=0; i<s.length; i++) {
        if (left[s[i]]) {
            temp.push(s[i]);
        } else if (!temp.length || ( right[s[i]] != left[temp.pop()] )) {
            return false;
        }
    }
    return temp.length ? false : true;
};