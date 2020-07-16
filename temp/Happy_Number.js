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