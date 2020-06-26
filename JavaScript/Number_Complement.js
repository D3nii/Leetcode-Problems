/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    num = num.toString(2);
    
    let arr = num.split('');
    
    for(let i=0; i<arr.length; i++)
        if (arr[i] == 1)
            arr[i] = 0;
        else 
            arr[i] = 1;
    
    num = arr.join('');
    
    return parseInt(num, 2);
};