/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s == t) return true;
    if (s.length != t.length) return false;
    
    let temp = 1, i=0;
    
    while(i < s.length) {
        if (s.indexOf(s[i]) == t.indexOf(t[i])) i++;
        else break;
    }
    
    return i == s.length;
};