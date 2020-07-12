/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {   
    let tempArr = [];
    
    let trans = {
        'a' : ".-",
        'b' : "-...",
        'c' : "-.-.",
        'd' : "-..",
        'e' : ".",
        'f' : "..-.",
        'g' : "--.",
        'h' : "....",
        'i' : "..",
        'j' : ".---",
        'k' : "-.-",
        'l' : ".-..",
        'm' : "--",
        'n' : "-.",
        'o' : "---",
        'p' : ".--.",
        'q' : "--.-",
        'r' : ".-.",
        's' : "...",
        't' : "-",
        'u' : "..-",
        'v' : "...-",
        'w' : ".--",
        'x' : "-..-",
        'y' : "-.--",
        'z' : "--.."
    };
    
    for (let i=0; i<words.length; i++) {
        let temp = '';
        
        for (let j=0; j<words[i].length; j++) {
            temp += trans[words[i][j]];
        }
        tempArr.push(temp);
    }
    
    let count = tempArr.length;
        
    for (let i=0; i<tempArr.length; i++) {
        for (let j=i+1; j<tempArr.length; j++) {
            if (tempArr[i] == tempArr[j]) {
                tempArr[j] = j;
                count -= 1;
                i=0, j=1;
            }
        }
    }
    
    return count;
    
};