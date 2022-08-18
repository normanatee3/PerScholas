// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate{
    constructor(name, devilFruit, hairStyle, crewPosition, ship){
        this.name = name
        this.devilFruit = devilFruit
        this.hairStyle = hairStyle
        this.crewPosition = crewPosition
        this.ship = ship
    }
    fallInSea(){
        if(this.devilFruit === "none"){
            console.log(`${this.name} fell in the Sea, and is swimming back to the ${this.ship}`)
        }else{
            console.log(`${this.name} fell in the Sea after eating the ${this.devilFruit}, and is drowning! Someone on the ${this.ship} help quick!`)
        }
    }
    introduction(){
        if(this.devilFruit === "none"){
            console.log(`${this.name} is the Straw Hats ${this.crewPosition}. ${this.name} also has ${this.hairStyle} hair, and hasn't eaten a Devil Fruit!`)
        }else{
            console.log(`${this.name} is the Straw Hats ${this.crewPosition}. ${this.name} also has ${this.hairStyle}, and ate the ${this.devilFruit}!`)
        }
    }
    reachWano(){
        this.hairStyle = "an updo"
        console.log(`${this.name} finally reached Wano and is wearing their hair in ${this.hairStyle} now!`)
    }
}
const Luffy = new Pirate("Monkey D. Luffy", "Gum-Gum Fruit", "straight black", "captain", "Thousand Sunny")
const Zoro= new Pirate("Roranoa Zoro", "none", "spiky green", "Swordsman", "Thousand Sunny")
const Franky = new Pirate("Franky", "none", "crazy blue", "Shipwright", "Thousand Sunny")
const ThousandSunny = [Luffy, Zoro, Franky]
const Robin = new Pirate("Robin", "Flower-Flower Fruit", "long black", "Archaeologist", "Going Merry")
const Ussop = new Pirate("SogeKing", "none", "curly black", "Sniper", "Going Merry")
const Sanji = new Pirate("Sanji", "none", "straight blonde", "Chef", "Going Merry")
const GoingMerry = [Robin, Ussop, Sanji]

ThousandSunny.forEach((strawHat) => {
    strawHat.introduction()
    strawHat.reachWano()
    strawHat.fallInSea()
});
GoingMerry.forEach((strawHat) => {
    strawHat.introduction()
    strawHat.reachWano()
    strawHat.fallInSea()
});