/**
 * @param {number} n
 * @return {boolean}
 */

let gl = 0;

var isHappy = function(n) {
    var s = '' + n;
    s = s.split('');
    let temp = 0;
    
    for (let i=0; i<s.length; i++) {
        temp += (s[i]*s[i]);
    }
    
    if (gl > 100) return false;
    
    if (temp == 1) return true;
    else {
        gl ++;
        isHappy(temp);
    }
    
    return true;
};