const onScreen = document.querySelector('.screen')
const buttons = document.querySelector('.buttonArea')
let playerSide ;
let enemySide; 
let enemyCount = 6












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
for(let i = 0; i<enemyCount; i++){
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

// reference winner of battle
let winner = ''

// determine winner of battle
const battle = (fighter1, fighter2) => {
    
    while(fighter1.hull>0 && fighter2.hull>0){
        if(turn == '1'){
            // console.log(`turn 1`);
            attack(fighter1, fighter2)
            turn = '2'
        }else if(turn == '2'){
            // console.log(`turn 2`);
            attack(fighter2, fighter1)
            turn = '1'
        }
    }
    if(fighter1.hull <= 0){
        winner = 'enemy'
    }else if(fighter2.hull <= 0){
        winner = 'player'
    }

}

// battle(player, alienTeam[0])
// console.log(winner);


// const nextBattle = () =>{
//     if(winner == 'enemy'){
//         console.log(`You have lost, game over.`);
//     } else if(winner == 'player')[

//     ]
// }

const startButton = () =>{

    createStart()
    createButton('Fire')
    createButton('Flee')
    createButton('Woops')
    createPlayer()
    for(let i = 0; i<enemyCount; i++){
        createEnemy()
    }

    
}
const createStart = () =>{
    onScreen.innerHTML = ''
    let ps = document.createElement("div")
    ps.classList.add('playerSide')
    let ce = document.createElement("div")
    ce.classList.add('center')
    let es = document.createElement("div")
    es.classList.add('enemySide')
    onScreen.append(ps, ce, es)

}
const createButton = (btnName) =>{
    let button1 = document.createElement("button")
    button1.classList.add('btn')
    button1.innerHTML = btnName
    buttons.append(button1)
}
const createPlayer = () =>{
    playerSide = document.querySelector('.playerSide')
    let player = document.createElement("div")
    player.classList.add('player')
    playerSide.append(player)
}
const createEnemy = () =>{
    enemySide = document.querySelector('.enemySide')
    let enemy = document.createElement("div")
    enemy.classList.add('enemy')
    enemySide.append(enemy)
}