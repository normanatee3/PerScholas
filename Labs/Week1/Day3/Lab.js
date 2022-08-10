// Remainder Operator 0-10 even

// for (let i = 0; i <=10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// if else

// let Grade = 80

// if(Grade >= 55 ){
//     if(Grade >= 60){
//         if(Grade >= 70){
//             if(Grade >= 80){
//                 console.log("You did a good job")
//             }
//             else{
//                 console.log("Keep trying")
//             }
//         }
//         else{
//             console.log("ehhhh")
//         }
//     }
//     else{
//         console.log("Not to good")
//     }
// }
// else{
//     console.log("You'll Get Em Next Time")
// }

// output loop

// for (let i = 10; i < 100; i += 20){
//     console.log(i)
//     if(i > 80){
//         for (let i = 20; i <= 100; i += 20){
//             console.log(i)
//         }
//     }
// }

// fizzbuzz

for (let i = 1; i <= 100 ; i++){
    if(i % 15 === 0){
        console.log("Fizzbuzz")
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    }
    else if(i % 3 === 0){
        console.log("Fizz")
    }
    else {
        console.log(i)
    }
}

