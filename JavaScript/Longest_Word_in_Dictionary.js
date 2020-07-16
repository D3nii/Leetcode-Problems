/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    let answer = '';
    let temp = [];
    
    for (let i=0; i<words.length; i++) {
        if (words[i].length == 1 || temp.includes(words[i].substring(0, words[i].length-1))) {
            if (words[i].length > answer.length) answer = words[i];
            temp.push(words[i]);
        }
    }
    
    return answer;
};