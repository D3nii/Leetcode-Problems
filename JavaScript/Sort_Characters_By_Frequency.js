/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    let ans = '';
    
    for (let i=0; i<s.length; i++) {
        if (map[s[i]]) map[s[i]]++;
        else map[s[i]] = 1;
    }
        
    var items = Object.keys(map).map(function(key) {
      return [key, map[key]];
    });

    items.sort(function(f, s) {
      return s[1] - f[1];
    });

	for (let i=0; i<items.length; i++) { 
		for (let j=0; j<items[i][1]; j++) {
			ans += items[i][0];
		}
	}

	return ans;
};