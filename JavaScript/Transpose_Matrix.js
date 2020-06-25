/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    if (A.length < 1 || A.length > 1000) return 0;
    if (A[0].length < 1 || A[0].length > 1000) return 0;
    
    let matrix = new Array(A[0].length);
    
    for (let i=0; i<A[0].length; i++)
        matrix[i] = new Array(A.length);
    
    for (let i=0; i<matrix.length; i++) 
        for (let j=0; j<matrix[0].length; j++)
            matrix[i][j] = 2;
    
    for (let i=0; i<matrix.length; i++) 
        for (let j=0; j<matrix[0].length; j++)
            matrix[i][j] = A[j][i];
    
    return matrix;
};