/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let low = 0, high = s.length - 1;
    let arr = s.split('');
    
    while (low < high) {
        while (low < high && !vowels.includes(arr[low])) low ++;
        
        while (low < high && !vowels.includes(arr[high])) high --;
        
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        
        low ++;
        high --;
    }
    
    return arr.join('');
};