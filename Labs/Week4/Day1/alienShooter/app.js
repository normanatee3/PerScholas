const player = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}

const alienTeam = []

const newShip = () =>{
    const alienShip ={
    }
    alienShip.hull = Math.floor((Math.random()*3.9)+3)
    alienShip.firepower = Math.floor((Math.random()*2.9)+2)
    alienShip.accuracy = (Math.floor((Math.random()*2.9)+6))/10
    alienTeam.push(alienShip)
    return alienShip
    
}
// spawns 6 ships
for(i = 0; i<6; i++){
    newShip()
}

console.log(alienTeam[0]);
console.log(player);

// attack function
const attack = (attacker, target) =>{
    if(Math.random() < attacker.accuracy){
        target.hull -= attacker.firepower
        console.log(`hit`);
    }else{
        console.log(`miss`);
    }
}

attack(alienTeam[0], player)
console.log(player);
attack(alienTeam[0], player)
console.log(player);
attack(alienTeam[0], player)
console.log(player);
attack(alienTeam[0], player)
console.log(player);
