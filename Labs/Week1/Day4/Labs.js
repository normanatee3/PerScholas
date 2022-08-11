// Exercise
// Using a while loop print integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output.

// let int = 0

// while(int <=20){
    
//     if(int % 2 === 0){
//         console.log(int*3)
        
//     }
//     int++
// }

// Exercise
// Using a while loop, print out all prime numbers between 0 - 20
// 2-3-5-7-11-13-17-19

// let divisorCount = 0
// let currentCount = 0
// let testCount = 0

// while(currentCount <=20){
//     for(testCount = 0; testCount < currentCount; testCount++){
//         if(currentCount % testCount === 0 ){
//             divisorCount++
//         }
//     }
    
//     if(divisorCount === 1){
//         console.log(currentCount)
//     }
//     currentCount++
//     divisorCount = 0
// }



// Write A function that : 

// --Takes in a parameter and adds the text "Bird is the Word" to the end
// ---Takes 3 parameters and adds them
// ---Takes 4 parameters and subtracts them
// ---Takes 2 parameters and divides them
// ---Takes 3 parameters and multiplies them


// Write a loop that prints out how many bills he received in return in as large denominations as possible.

let shirtCost = 27.83
let paidCash = 100
let changeOwed = paidCash - shirtCost
let billCount = 0

while(changeOwed >= 1 ){
    if(changeOwed >= 20){
        changeOwed -= 20
        billCount++
    }
    else if(changeOwed >= 10){
        changeOwed -= 10
        billCount++
    }
    else if(changeOwed >= 5){
        changeOwed -= 5
        billCount++
    }
    else if(changeOwed >= 1){
        changeOwed -= 1
        billCount++
    }
    
}
console.log(billCount)