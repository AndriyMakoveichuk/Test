/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
var nstr = "";
for (var i = 0; i<str.length; i++) {
    nstr+=str[i].toUpperCase();
    for (var j = 0; j!=i; j++) {nstr+=str[i].toLowerCase();
    }
    if (i!=str.length-1){ nstr+="-";}
    
}

return nstr;
}
