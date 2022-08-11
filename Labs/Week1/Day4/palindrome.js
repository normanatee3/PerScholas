// let str = "civic"
// var noPunc = str.replace("");

// console.log(str.toLowerCase())

// let strReverse = str.split("").reverse().join("")
// if (str === strReverse) {
//     console.log("Palindrome")
// }else{
//     console.log("Not a Palindrome")
// }

console.log(isPalindrome("race car"))

function isPalindrome(word){
    let reversed = reverseWord(word)

    if (word.replace(" ", "") === reversed.replace(" ", "")){
        return true
    }
    return false
}

function reverseWord(word){
    let newWord = ""
    for (let i = word.length - 1; i >= 0; i--){
        newWord += word[i]
    }
    return newWord
}