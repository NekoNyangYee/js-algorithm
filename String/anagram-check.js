function anaGramCheck(str1, str2) {
    const str1LowerCase = str1.toLowerCase().replace(/[^a-z]/gi, '');
    const str2LowerCase = str2.toLowerCase().replace(/[^a-z]/gi, '');

    if (str1LowerCase.length !== str2LowerCase.length) {
        return false;
    }

    const sortedStr1 = str1LowerCase.split('').sort().join('');
    const sortedStr2 = str2LowerCase.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(anaGramCheck("listen", "silent"));