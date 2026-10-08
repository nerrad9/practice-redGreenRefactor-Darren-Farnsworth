import * as main from "../main.js"

describe("countVowels", function(){
    //positive
    test("Should return the number of vowels in word", function(){
        expect(main.countVowels("potato")).toBe(3)
    })
    
    //negative
    test("Should return null if non string passed in", function(){
        expect(main.countVowels(3)).toBe(null)
    })

    //edge
     test("Should return 0 for an empty string", function(){
        expect(main.countVowels("")).toBe(0)
    })
    test("Should return 0 for voweless words", function(){
        expect(main.countVowels("nymph")).toBe(0)
    })
})