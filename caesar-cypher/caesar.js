const getCode = str => {
    return str.charCodeAt(0);
};

const getChar = code => {
    return String.fromCharCode(code);
};

const isLower = str => {
    return getCode(str) >= 97 && getCode(str) <= 122;
};

const isAlpha = str => {
    return getCode(str) >= 65 && getCode(str) <= 90;
};

const caesar = (str, key) => {
    const alphaRe = /[a-zA-Z]/;
    const strArr = str.split('');
    let newString = '';
    //iteretae through the array with the chars of the given string
    for (let i = 0; i < strArr.length; i++) {
        //check if the current char is a a letter
        if (alphaRe.test(strArr[i])) {
            //check if the letter is lower
            if (isLower(strArr[i])) {
                newString += getChar((((getCode(strArr[i]) - 97) + key) % 26) + 97);
                //check if the letter is upper
            } else if (isAlpha(strArr[i])) {
                newString += getChar((((getCode(strArr[i]) - 65) + key) % 26) + 65);
            }
        } else {
            newString += strArr[i];
        }
    }
    return newString;
};



console.log(caesar('Aabcz 5A', 55))