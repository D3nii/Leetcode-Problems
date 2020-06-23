/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    let romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    for (let i=0; i<s.length; i++) {
        if (s[i] == 'I' && s[i+1] == 'V') {
            answer += 4;
            i++
            continue;
        } else if (s[i] == 'I' && s[i+1] == 'X') {
            answer += 9;
            i++
            continue;
        } else if (s[i] == 'X' && s[i+1] == 'L') {
            answer += 40;
            i++
            continue;
        } else if (s[i] == 'X' && s[i+1] == 'C') {
            answer += 90;
            i++
            continue;
        } else if (s[i] == 'C' && s[i+1] == 'D') {
            answer += 400;
            i++
            continue;
        } else if (s[i] == 'C' && s[i+1] == 'M') {
            answer += 900;
            i++
            continue;
        }
        
        answer += romans[s[i]];
    }
    
    if (answer < 0 || answer >= 4000) return 0;
    else return answer;
};