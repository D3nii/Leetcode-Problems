<<<<<<< HEAD
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
||||||| merged common ancestors
=======
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hash = {};
    
    while (n !== 1) {
        n += '';
        let cur = 0;
        
        for (let i = 0; i < n.length; i++) {
            cur += n[i]*n[i];
        };
        
        if (hash[cur]) {
            return false;
        } else {
           hash[cur] = true; 
        };
        
        n = cur;
    };
    
    return true;
};
>>>>>>> 3e8ef459acc71bed40fc2913ddd05b8635f9d492
