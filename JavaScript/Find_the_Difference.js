/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr1 = s.split(''); arr1.sort();
    let arr2 = t.split(''); arr2.sort();
    
    for (let i=0; i<s.length; i++) {
        for (let j=0; j<t.length; j++) {
            if (arr1[i] == arr2[j]) {
                arr1[i] = '';
                arr2[j] = '';
            }
        }
    }
    
    return arr2.join('');
};