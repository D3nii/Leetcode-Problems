/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = [];
    let smaller;
    let j = 0;
    let bool = true;
    
    if (strs[0] !== undefined) {
        for (var i=0; i<strs[0].length; i++) {
            for (j=0; j<strs.length-1; j++) {
                if (strs[j][i] !== strs[j+1][i]) {
                    bool = false;
                }
            }
            if (bool) {
                ans.push(strs[j][i]);
            }
        }
    }

    return ans.join('');
};