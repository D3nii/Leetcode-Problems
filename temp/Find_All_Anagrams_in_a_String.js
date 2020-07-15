/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) { 
    let map = {}, ans = [];
    let temp = 0, unique = 0;
    
    for (let x of p) {
        if (map[x]==null) {
            unique++;
            map[x] = 1;
        } else {
            map[x]++;
        }
    }

    for (let i=0; i<s.length; i++) {
        if (map[s[i]] != null) 
            map[s[i]]--;
        
        if (map[s[i]] == 0) 
            unique--;
        
        if (unique == 0) 
            ans.push(temp);
        
        if (i - temp + 1 == p.length) {
            if (map[s[temp]] != null) 
                map[s[temp]]++;
            
            if (map[s[temp++]] == 1)
                unique++;
        }
    }
    
    return ans;
};