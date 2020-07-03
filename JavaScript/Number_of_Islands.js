/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] == '1') {
                count += recurse(grid, i, j);
            }
        }
    }
    
    return count;
};

var recurse = function (grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == '0') return 0;
    
    grid[i][j] = '0';
    
    recurse(grid, i+1, j);
    recurse(grid, i-1, j);
    recurse(grid, i, j+1);
    recurse(grid, i, j-1);
    
    return 1;
}