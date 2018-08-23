const harmlessRansomNote = (note, magazine) => {
    const magazineArr = magazine.split(' ');
    const noteArr = note.split(' ');
    const magazineHash = {};

    magazineArr.forEach(word => {
        if(!magazineHash[word]) {
            magazineHash[word] = 1;
        } else {
            magazineHash[word] += 1;
        }
    });

    let noteIsPossible = true;

    noteArr.forEach(word=>{
        if(magazineHash[word] !== undefined) {
            magazineHash[word]--;
        }
    });

    for(let i in magazineHash) {
        if(magazineHash[i] < 0) {
            return false;        
        };
    }
    return noteIsPossible;
};

console.log(harmlessRansomNote('hello hello', 'hello hello'))