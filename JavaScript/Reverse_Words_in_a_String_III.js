/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ')
    let temp
    let ans = []
    
     for (let i=0; i<arr.length; i++) {
         temp = ''
         for (let j=0; j<arr[i].length; j++) {
             temp += arr[i][arr[i].length-j-1]
         } ans.push(temp)
     }
    
    return ans.join(' ')    
};