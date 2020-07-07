/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let count = 0;
    
    for (let i=0; i<M.length; i++) {
        count += recur(M, i);
    }
    
    return count;
};

var recur = function(M, i) {
    if (M[i][i] == 0) return 0;
    
    M[i][i] = 0;
    
    for (let j=0; j<M.length; j++) {
        if (M[i][j] == 1) {
            M[i][j] = 0;
            M[j][i] = 0;
            recur(M, j);
        }
    }
    return 1;
}