export const sameParityFilter = (arr = []) => {
var ans = [];
for (var i=0; i<arr.length; i++) {
    if (Math.abs(arr[i]%2)===Math.abs(arr[0]%2)) {ans.push(arr[i])}
}
return ans;
}
