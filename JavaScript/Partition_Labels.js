/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    if (S == null || S.length == 0) return S;
    
    let out = [];
    let indices = [];
    let start = 0, end = 0;

    for (let i=0; i<S.length; i++) {
        indices[S[i]] = i;
    }
        
    for (let i=0; i<S.length; i++) {
        end  = Math.max(end, indices[S[i]]);
        
        if (i == end) {
            out.push(end-start+1);
            start = end + 1;
        }
    }
    
    return out;
};