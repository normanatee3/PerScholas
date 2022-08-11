// // 1.

// const maxOfTwoNumbers = (x, y) => {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }
  
//   console.log(maxOfTwoNumbers(3, 9));

// // 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// const maxOfThree = (x, y, z) => {
//     if(x > y && x > z){
//         return x
//     }
//     else if(y > z){
//         return y
//     }
//     else{
//         return z
//     }
// }
// console.log(maxOfThree(9, 6, 3))

// // 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(word) {
    if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u"){
        return "true"
    }
    else{
        return "false"
    }
}
console.log(isCharAVowel("e"))

// // 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.


// const sumArray = (digits) => {
//     let sum = 0
//     for(let i = 0; i < digits.length; i++)
//     sum += (digits[i])
//     return sum

// }
// console.log(sumArray([3 ,4, 5, 6]));

// // 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// function productArray(digits){
//     let product = 1
//     for(let i = 0; i < digits.length; i++)
//     product *= (digits[i])
//     return product

// }
// console.log(productArray([3 ,4 ,5 , 6]));

// // 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.


// const numArgs = (...arg) => {
//         return arg.length
// }
// console.log(numArgs(1, 2 ,3, 7))

// // 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// function reverseString(string){
//     return string.split("").reverse().join("")
// }
// console.log(reverseString("applejuice"))

// // 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

// const longestStringInArray = (bigString) => {
//     let biggestString = ""
//     for(let i = 0; i < bigString.length; i++){
//         if (bigString[i].length > biggestString.length) {
//             biggestString = bigString[i]
//         }
//     }
//     let bigStringSize = biggestString.length
//     return bigStringSize

// }
// console.log(longestStringInArray(["3" ,"dude", "12345678", "two"]));

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].



function stringsLongerThan(arr, filter){
    const result =[]
    for( i =0; i < arr.length; i++){
        if(arr[i].length > filter){
            result.push(arr[i])
        }
    }
    return result
}
console.log(stringsLongerThan(["a", "string", "full", "of", "words"], 3 ))