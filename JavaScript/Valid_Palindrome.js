/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.split(' ').join('');
        
    for (let i=0; i<s.length; i++) {
        if (s[i] !== s[s.length-1-i]) {
            return false;
        }
    }
    
    return true;
};