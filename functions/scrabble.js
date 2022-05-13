
//load from url fetch intead fs..
// const fs = require('fs')
// const sowpods = fs.readFileSync('./sowpods.txt','utf-8');
//  const runtime = require('regenerator-runtime/runtime');
const axios = require('axios');
// const url = require('url');

exports.ScrabbleMatch = async function(randomString){
    // const word = sowWords
    // const sowpods = await axios.get("https://scabblewords.web.app/sowpods")
    const url = `${process.env.BASE_URL}/sowpods.txt`


    const sowpods = await axios.get(url) // use dotenv in the future :)
 
    const word = sowpods.data.split('\n');
    const splitString = randomString.toUpperCase();
    let words = []
    for (let i = 0; i < word.length; i++){
        if(word[i].length <= splitString.length){
            words.push(word[i])
        }
    }

    function isWordValid(validLetters, attemptedWord) {
        const validLettersSplitted = validLetters.split("")
        const attemptedWordSplitted = attemptedWord.split("")
        return attemptedWordSplitted.every(attemptedLetter => {
            const letterIndex = validLettersSplitted.indexOf(attemptedLetter)
            if(validLettersSplitted.includes('_') && letterIndex === -1){
                validLettersSplitted.splice(letterIndex, 1)
                return true
            } else if(letterIndex > -1 ){
                validLettersSplitted.splice(letterIndex, 1)
                return true
            } else {
                return false
            }
        });  
    }
    let validWords = []
    for(let i = 0; i < words.length; i++){
        if(isWordValid(splitString, words[i]) === true){
            validWords.push(words[i])
        }
    }
    function Blank(randString,list){
        let cL = list.split('')
        let sL = randString.split('')
        for(let i = 0; i < cL.length; i++){
            for(let j = 0; j < sL.length; j++){
                if (cL[i] === sL[j]){
                    cL.splice([i],[i+1])
                }   
            }
        }
        return cL
    }
    function scores(word){
        let letterCount = 0
        for(let i = 0; i < word.length; i++){
            if(word[i].match(/[AEILNORSTU]/)){
                letterCount += 1;
            } else if(word[i].match(/[DG]/)){
                letterCount += 2;
            } else if(word[i].match(/[BCM]/)){
                letterCount += 3;
            } else if(word[i].match(/[FHVWY]/)){
                letterCount += 4;
            } else if(word[i].match(/[K]/)){
                letterCount += 5;
            } else if(word[i].match(/[JX]/)){
                letterCount += 8;
            } else if(word[i].match(/[QZ]/)){
                letterCount += 10;
            } 
        }
        return letterCount
    }
    let addedScores = [];
    for (let i = 0; i < validWords.length; i++){
        addedScores.push([validWords[i],scores(validWords[i]) - scores(Blank(randomString,validWords[i]))])
    }
    addedScores = JSON.stringify(addedScores)  
    console.log(addedScores)
    return addedScores
}

    
