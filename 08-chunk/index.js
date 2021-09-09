// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
var ans = [];
for (var i=0; i<=arr.length/size; i++) {
    if (arr.slice(i*size, (i+1)*size)!=0){
        var a = arr.slice(i*size, (i+1)*size);
        ans[i]=a;
    }
    
}
   return ans;
};
