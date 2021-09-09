export const getLastWordLength = str => {
    str = str.trim();
    var masiv = str.split(" ");
return masiv[masiv.length-1].length;
};
