// 1B

// let firstVariable = "Hello World"
// firstVariable = 5
// let secondVariable = firstVariable
// secondVariable = "yada yada"

// 

// let yourName = "Norman"

// const introduction = () => {
//     return `Hello, my name is ${yourName}`
// }

// console.log(introduction())

// 1C


// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||

// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// 1D


// let animal = 'pig' 

// if(animal === 'pig'){
//     console.log('oink')
// }else{
//     console.log(`Hey! You're not a cow!`)
// }

// 1E

// let age = 26

// if(age > 16){
//     console.log(`Here are the keys!`)
// }else{
//     console.log(`Sorry, you're too young`)
// }

// 2A

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }
// for(let i = 10; i <= 400; i++){
//     console.log(i)
// }
// for(let i = 12; i <= 4000; i+=3){

//     
//     console.log(i);
//     

// }

// 2B

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(`${i} <-- is an even number`)
//     }else{
//         console.log(i)
//     }

// }

// 2C

// for(let i = 0; i <= 100; i++){
//     if(i % 15 === 0){
//         console.log(`I found a ${i}. High five! Three is a crowd`)
//     }
//     else if(i % 5 === 0){
//         console.log(`I found a ${i}. High five!`)
//     }
//     else if(i % 3 === 0){
//         console.log(`I found a ${i}. Three is a crowd`)
//     }
// }

// 2D

// let bank_account = 0

// for(let i = 0; i <= 10 ; i++){
//     bank_account += i
// }

// console.log(bank_account)

// for(let i = 0; i <= 100 ; i++){
//     bank_account += i*2
// }

// console.log(bank_account)

// 3B

// let quotes = ["one", "two", "three"]

// 3C

// const randomThings = [1, 10, "Hello", true]

// 1. first element is randomThings[0]

// randomThings[2] = "World"

// console.log(randomThings)

// 3D

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 3rd element is ourClass[2]

// ourClass[4] = "Octocat"
// ourClass.push("Cloud City")


// console.log(ourClass)


// 3E

// const myArray = [5, 10, 500, 20]

// myArray.push("Aegon")
// myArray.push("your choice")
// myArray.shift()
// myArray.unshift("Bob Marley")
// myArray.pop()
// Array.prototype.reverse()


// console.log(myArray)

// 3F

// let int = 500
// if(int < 100){
//     console.log(`little number`)
// }else{
//     console.log(`big number`)
// }

// 3G

// let int = 10
// if(int < 5){
//     console.log(`little number`)
// }else if(int > 10){
//     console.log(`big number`)
// }else{
//     console.log(`monkey`)
// }

// 3H

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//         // These are Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ], [
//         // These are Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ], [
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];

// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// kristynsCloset.splice(6, 0, "raybans")

// kristynsCloset[5] = "stained knit hat"


// console.log(kristynsCloset)

// console.log(thomsCloset[0][0])
// console.log(thomsCloset[1][2])
// console.log(thomsCloset[2][1])


// console.log(`Thom is looking fierce today in a ${thomsCloset[0][1]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}`)

// thomsCloset[1][2] = "Footie Pajamas"

// console.log(thomsCloset[1])


// 4A

// const printGreeting = (name) =>{
//     return `Hello there, ${name}`
// }
// console.log(printGreeting("Slimer"));

// 4B

// const printCool = (name) =>{
//     return `${name} is cool`
// }
// console.log(printCool("Captain Reynolds"));

// 4C

// const calculateCube = (num) =>{
//     return num*num*num
// }

// console.log(calculateCube(5));

// 4D

// const isVowel = (entry) =>{
//     entry = entry.toLowerCase()
//     if(entry == "a" || entry == "e" || entry == "i" || entry == "o" || entry == "u"){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isVowel('A'))

// 4E

// const getTwoLengths = (one, two) =>{
//     return[one.length, two.length]
// }

// console.log(getTwoLengths('hank', 'hippopopalous'))

// 4F

// const getMultipleLengths = (aos) =>{
//     newArray=[]
//     for(let i = 0; i < aos.length; i++){
//         newArray[i] = aos[i].length
//     }
//     return newArray
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// 4G

// const maxOfThree = (a, b, c) =>{
//     if(a >= b && a >= c){
//         return a
//     }else if(b >= c){
//         return b
//     }else{
//         return c
//     }
// }
// console.log(maxOfThree(6, 9, 1));

// 4H

// let longestWord = ""

// const printLongestWord = (arr) =>{
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > longestWord.length){
//             longestWord = `${arr[i]}`
//         }
//     } return longestWord   
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// // 5A

// const user = {
//     name: "Norman",
//     email: "e@mail.com",
//     age: 28,
//     purchased: []
// }
// // console.log(user)
// // 5B

// user.email = "new@email.com"
// user.age = user.age++

// // console.log(user)
// // 5C

// user.location = "Cambridge"

// // console.log(user)
// // 5D

// user.purchased.push("carbohydrates") 
// user.purchased.push("peace of mind") 
// user.purchased.push("Merino jodhpurs") 

// // console.log(user.purchased[2])
// // 5E

// user.friend = {
//     name: "porter",
//     email: "porter@mail.com",
//     age: 28,
//     location: "New York",
//     purchased: []
// }
// // console.log(user.friend.name)
// // console.log(user.friend.location)

// user.friend.age = 55
// user.friend.purchased.push("The One Ring")
// user.friend.purchased.push("A latte")
// // console.log(user.friend.purchased[1])

// // 5F

// // for(let i = 0; i < user.purchased.length; i++){
// //     console.log(user.purchased[i])
// // }
// // for(let i = 0; i < user.friend.purchased.length; i++){
// //     console.log(user.friend.purchased[i])
// // }

// // 5G

// const updateUser = () =>{
//     user.age++
//     user.name = user.name.toUpperCase()
// }


// const oldAndLoud = (person) =>{
//     person.age++
//     person.name = person.name.toUpperCase()
// }
// oldAndLoud(user)
// console.log(user)


const cat1 = {
    name:"biggles",
    breed:"sphynx",
    age:2
}
// console.log(cat1.age)
// console.log(cat1.breed)

const cat2 = {
    name:"snowball",
    breed:"fluff",
    age:4
}

// const combineCats = (mama, papa) =>{
//     console.log(mama)
//     console.log(papa)
// }

// combineCats(cat1, cat2)

const combineCats = (mama, papa) =>{
    const cat3 = {
        name: `${mama.name}${papa.name}`,
        breed: `${mama.breed}-${papa.breed}`,
        age: 1
    }
    return cat3
}
console.log(combineCats(cat1, cat2))
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))))