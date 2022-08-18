// You will be working with this class

// class Cat {}
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances
// Constructors

class Cat{
    constructor(name, breed, collarColor, furLength){
        this.name = name
        this.breed = breed
        this.collarColor = collarColor
        this.furLength = furLength
    }
    changeCollar(newColor){
        this.collarColor = newColor
        console.log(`I swapped ${this.name}s old collar for a ${this.collarColor} one. How does it look?`)
    }
    cutFur() {
        if(this.furLength === "long"){
            console.log(`Haircut time? ${this.name}s fur is SUPER long! Let's bring it down some...`)
            this.furLength = "medium"
        }else if(this.furLength === "medium"){
            console.log(`Haircut time? ${this.name}s fur isn't too long, but let's trim and shape it`)
            this.furLength = "short"
        }else{
            console.log(`Haircut time? ${this.name}s fur is already short, no need for any grooming.`)
        }
    }
    brag(){
        console.log(`This is my ${this.breed} ${this.name}. He has ${this.furLength} fur, and a ${this.collarColor} collar. Isn't he the best?!`)
    }
}

const Biggles = new Cat("Mr. Biggles", "Maine Coon", "blue", "long")
const Jacquees = new Cat("Jacquees", "Siamese", "green", "short")

console.log('\n')
console.log(Biggles)
Biggles.brag()
Biggles.changeCollar("red")
Biggles.cutFur()
Biggles.cutFur()
console.log('\n')
console.log(Jacquees)
Jacquees.brag()
Jacquees.changeCollar("red")
Jacquees.cutFur()
