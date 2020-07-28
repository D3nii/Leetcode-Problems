/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let count = 0;
    
    for (let i=0; i<t.length; i++) {
        if (s[count] == t[i]) {
            count ++;
        }
        
        if (s.length == count) break;
    }
    
    return count == s.length;
};