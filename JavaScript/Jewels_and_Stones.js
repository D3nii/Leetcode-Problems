/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let j_list = J.split('');
    let s_list = S.split('');
    let count = 0;
    
    for (let i=0; i<j_list.length; i++) {
        for (let j=0; j<s_list.length; j++) {
            if (j_list[i] == s_list[j])
                count ++;
        }
    }
    
    return count;
};