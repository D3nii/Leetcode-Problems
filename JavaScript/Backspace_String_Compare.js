/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return check(S) == check(T);
};

var check = function (list) {
    let temp = [];
    
    for (let i=0; i<list.length; i++) {
        if (list[i] != '#') temp.push(list[i]);
        else temp.pop();
    }
    
    return temp.join('');
}