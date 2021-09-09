/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    numbers = numbers.replace(/\s/g, '');
    if (numbers.indexOf("-")!=-1){
        numbers = numbers.match(/.{1,2}/g);
    } 
    var masiv = numbers.split("");
        var ans = "";
        ans+=Math.min.apply(null, masiv);
        ans+=" "+Math.max.apply(null, masiv);
    
return ans;
}
