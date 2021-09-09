/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
var ans = 0;
ans+= parseInt(Math.max.apply(null, numbers));
numbers.splice(numbers.indexOf(ans),1);
ans+=parseInt(Math.max.apply(null, numbers));
return ans;
}
