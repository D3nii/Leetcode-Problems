/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let temp = {};
    let arr = s.split('');
    
    for (let i=0; i<s.length; i++) {
        if (!temp[s[i]])
            temp[s[i]] = 1;
        else
            temp[s[i]] ++;
    }
    
    for (let i=0; i<arr.length; i++) {
        if (temp[arr[i]] == 1) {
            return i;
        }
    }
    
    return -1;
};