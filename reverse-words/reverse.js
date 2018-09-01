const reverseWords = str => {
    return str.split(' ').map(word=>{
        return word.split('').reverse().join('');
    });
};

console.log(reverseWords('This is a string'))