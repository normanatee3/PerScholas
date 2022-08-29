const player = {
    name: 'Player',
    hull: 20,
    firepower: 5,
    accuracy: .7
}

const alienTeam = []
let turn = '1'
const newShip = () =>{
    const alienShip ={
    }
    alienShip.name = 'alien'
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

// console.log(alienTeam[0]);
// console.log(player);

// attack function
const attack = (attacker, target) =>{
    if(Math.random() < attacker.accuracy){
        target.hull -= attacker.firepower
        console.log(`hit`);
    }else{
        console.log(`miss`);
    }
}

// attack(alienTeam[0], player)
// console.log(player);

// determine winner of battle
const battle = (fighter1, fighter2) => {
    while(fighter1.hull>0 && fighter2.hull>0){
        if(turn == '1'){
            console.log(`turn 1`);
            attack(fighter1, fighter2)
            turn = '2'
            // console.log(turn);
        }else if(turn == '2'){
            console.log(`turn 2`);
            attack(fighter2, fighter1)
            turn = '1'
        }
    }
    if(fighter1.hull <= 0){
        console.log(`winner is ${fighter2.name}`);
    }else if(fighter2.hull <= 0){
        console.log(`winner is ${fighter1.name}`);
    }
}
battle(player, alienTeam[0])