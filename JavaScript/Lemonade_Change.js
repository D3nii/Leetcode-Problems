/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let temp = {};
    
    for (i of bills) {
        if (i == 5) { 
            if (temp[i] != null) temp[i] ++;
            else temp[i] = 1;
        } else if (i == 10) { // Bills equal to 10
            if (temp[5] > 0) {
                temp[5] --;
                
                if (temp[10] != null) temp[10] ++;
                else temp[10] = 1;
                
            } else return false;
            
        } else { // Bills greater than 10
            if (temp[5] > 0 && temp[10] > 0) {
                temp[5] --;
                temp[10] --;
                
            } else if (temp[5] >= 3) {
                temp[5] -= 3
            } else return false;
        }  
    }
    
    return true;
};