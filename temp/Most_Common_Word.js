/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let temp = {}
    paragraph = paragraph.match(/[A-Za-z]+/g)
    paragraph = paragraph.map(x => x.toLowerCase())
    
    for (let x of paragraph) {
        temp[x] = temp[x] ? temp[x] += 1 : temp[x] = 1
    }
    
    for (let x of banned) {
        temp[x] = temp[x] ? temp[x] = -1 : null
    }
    
    return Object.keys(temp).reduce((a, b) => temp[a] > temp[b] ? a : b)
};