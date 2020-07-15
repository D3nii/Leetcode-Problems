/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let map1 = {};
    let map2 = {};
    const words = str.split(' ');
  
    if(pattern.length != words.length) return false;
  
    for(let i = 0; i < pattern.length; i++) {
        if(!map1[pattern[i]] && !map2[words[i]]) {
            map1[pattern[i]] = words[i];
            map2[words[i]] = pattern[i];
            continue;
        }
      
        if(map1[pattern[i]] != words[i] || 
           map2[words[i]] != pattern[i]) 
        return false;
    }
  
    return true;
};