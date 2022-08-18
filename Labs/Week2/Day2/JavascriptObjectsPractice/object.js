// const cat = {
//     name: "Biggles",
//     age: "3",
//     favoriteThings:["yarn", "sleep", "catnip"],
//     speaksFrench: false,
//     solvesCubes: true
// }
// console.log(cat)

// const myRoom = {
//     electronics:["TclTV", "ToshibaTV", "PC", "keyboard", "mouse", "Cell Phone", "Tablet", "Alexa"],
//     sweaters:["christmas", "striped", "aztec"],
//     bins:["trash", "recycling"],
//     hasDesk: true,
//     trashTakenOut: false,
//     roomCleaned: false,
//     brandKeyboard: "Sades",
//     brandMouse: "rytaki",
//     brandPC: "hand built",
//     pizzaBoxes: 3,
//     waterBottles: 7,
//     takeoutBags: 2,

//     cleanRoom: function(){
//         console.log(`Getting rid of ${this.waterBottles} items.`)
//     }
// }
// console.log(myRoom.cleanRoom())

class Human{
    constructor(nombre, eyeColor, hairColor, height){
        this.legs = 2
        this.arms = 2
        this.eyeColor = eyeColor
        this.hairColor = hairColor
        this.height = height
        this.nombre = nombre
    }
    gotHired(newJob){
        this.occupation = newJob
    }
    sharkAttack(){
        this.legs--
    }
    walk () {
        if(this.legs >= 2){
            console.log(`${this.nombre} is walking!`)
        }else{
            console.log(`${this.nombre} can't walk...`)
        }
    }
    legCount(){
        if(this.legs === 1){
            console.log(`${Norman.nombre} has ${Norman.legs} leg.`)
        }else{
            console.log(`${Norman.nombre} has ${Norman.legs} legs.`)
        }
    }
}

const Norman = new Human("Norman", "brown", "black", "5'10")

Norman.gotHired("CEO")
Norman.legCount()
Norman.walk()
Norman.sharkAttack()
Norman.legCount()
Norman.walk()
