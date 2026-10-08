function countVowels(word){
    if (word.length == 0){return 0}
    if (typeof word !== 'string'){return null}
    let count = 0
    for (let letter of word){
        if (["a","e","i","o","u"].includes(letter)){count++}
    }
    return count
}

export {countVowels}