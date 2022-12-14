class Hamster {
    constructor(name){
    this.owner = ''
    this.name = name
    this.price = 15
    }
    wheelRun(){
        console.log(`squeak squeak`)
    }
    eatFood(){
        console.log(`nibble nibble`)
    }
    getPrice(){
        return this.price
    }
}

class Person{
    constructor(name){
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hi my name is ${this.name}`)
    }
    eat(){
        this.weight++
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood+=10
        this.bankAccount-= hamster.getPrice()
    }
}

const timmy = new Person ('Timmy') 

for(let i = 0; i < 5; i++){
    timmy.ageUp()
}
for(let i = 0; i < 5; i++){
    timmy.eat()
}
for(let i = 0; i < 5; i++){
    timmy.exercise()
}
for(let i = 0; i < 9; i++){
    timmy.ageUp()
}
const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster(gus)

for(let i = 0; i < 15; i++){
    timmy.ageUp()
}
for(let i = 0; i < 2; i++){
    timmy.eat()
}
for(let i = 0; i < 2; i++){
    timmy.exercise()
}

class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

class Chef {
    constructor(){
        this.dinnerSet = [];
    }
    
    createDinner(app, ent, des) {
        let newDinner = new Dinner(app, ent, des);
        dinnerSet.push(newDinner);
    }
}

let gordonRamsey = new Chef();
gordonRamsey.createDinner('fries', 'chicken', 'cake');
gordonRamsey.createDinner('mozzy sticks', 'steak', 'pie');
gordonRamsey.createDinner('nachos', 'burrito', 'churro');
console.log(gordonRamsey.dinnerSet);