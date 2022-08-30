const onScreen = document.querySelector('.screen')
const buttons = document.querySelector('.buttonArea')
let playerSide ;
let enemySide; 
let center;
let shields;
// reference winner of battle
let winner = ''
let missileCount = 3
const alienTeam = []
let turn = '1'
let credits = 0
let level = 1

const player = {
    name: 'Player',
    hull: 20,
    firepower: 5,
    accuracy: .7
}

const newShip = () =>{
    const alienShip ={
    }
    alienShip.name = 'alien' + (alienTeam.length+1)
    alienShip.hull = Math.floor((Math.random()*4)+3)
    alienShip.firepower = Math.floor((Math.random()*3)+2)
    alienShip.accuracy = (Math.floor((Math.random()*3)+6))/10
    alienTeam.push(alienShip)
    return alienShip
    
}

// attack function
const attack = (attacker, target) =>{
    center = document.querySelector('.center')
    if(Math.random() < attacker.accuracy){
        target.hull -= attacker.firepower
        center.innerHTML+=(`${attacker.name} hit for ${attacker.firepower}<br>`);
    }else{
        center.innerHTML+=(`${attacker.name} missed<br>`);
    }
}

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


const startButton = () =>{
    let enemyCount = Math.floor(Math.random()*5)+3
    shields = Math.floor(Math.random()*11)
    player.hull += shields
    createStart()
    createFireButton('Fire')
    createMissileButton('Missile')
    createFleeButton('Flee')
    createWoopsButton('Woops')
    createPlayer()
    for(let i = 0; i<enemyCount; i++){
        newShip()
        createEnemy()
    }
    

    
}
const createStart = () =>{
    onScreen.innerHTML = ''
    buttons.innerHTML = ''
    let ps = document.createElement("div")
    ps.classList.add('playerSide')
    let ce = document.createElement("div")
    ce.classList.add('center')
    let es = document.createElement("div")
    es.classList.add('enemySide')
    onScreen.append(ps, ce, es)

}
const createFireButton = (btnName) =>{
    let button1 = document.createElement("button")
    button1.classList.add('btn')
    button1.classList.add(btnName)
    button1.addEventListener('click', () =>{
        if(alienTeam.length == 0){
            winState()
            levelUp()
            
        }else{
            center = document.querySelector('.center')
            center.innerHTML=(`You Started with ${player.hull} health.<br>`);
            player.firepower = 5
            turn = '1'
            battle(player, alienTeam[0])
            if(winner == 'player'){
                destroyEnemy()
                gainCredits()
        }else if(winner == 'enemy'){
            center.innerHTML+=(`You Lost.<br>`);
            buttons.innerHTML = '<button onclick="startButton()" class="btn">Start</button>'
            onScreen.innerHTML = 'You Lost. Click Start to Try again'
            player.hull = 20
            alienTeam.length = 0
            missileCount = 3
            resetCredits()
            levelReset
        }
    }
    })
    button1.innerHTML = btnName
    buttons.append(button1)
}
const createMissileButton = (btnName) =>{
    let button1 = document.createElement("button")
    button1.classList.add('btn')
    button1.classList.add(btnName)
    button1.innerHTML = `${btnName}s - ${missileCount}`
    button1.addEventListener('click', () =>{
        center = document.querySelector('.center')
        if(alienTeam.length == 0){
            winState()
            levelUp()
            
        }else{
            player.firepower = 8
            if(missileCount>0){
                center.innerHTML=(`You Started with ${player.hull} health.<br>`);
                center.innerHTML+=(`You fired a missile.<br>`);
                attack(player, alienTeam[0])
                if(alienTeam[0].hull<=0){
                    destroyEnemy()
                    gainCredits()
                    missileCount--
                }else if(alienTeam[0].hull>0){
                    center.innerHTML+=(`Enemy is still alive with ${alienTeam[0].hull} health.<br>`);
                    missileCount--
                }
                button1.innerHTML = `${btnName}s - ${missileCount}`
            }else{
                center.innerHTML=(`You are out of Missiles.<br>`);
            }
    }
    })
    
    buttons.append(button1)
}
const createFleeButton = (btnName) =>{
    let button1 = document.createElement("button")
    button1.classList.add('btn')
    button1.classList.add(btnName)
    button1.addEventListener('click', () =>{
        buttons.innerHTML = '<button onclick="startButton()" class="btn">Start</button>'
        onScreen.innerHTML = 'You Ran Away and lost half your Credits'
        player.hull = 20
        alienTeam.length = 0
        missileCount = 3
        fleeCredits()
        levelReset()
    })
    button1.innerHTML = btnName
    buttons.append(button1)
}
const createWoopsButton = (btnName) =>{
    let button1 = document.createElement("button")
    button1.classList.add('btn')
    button1.classList.add(btnName)
    button1.addEventListener('click', () =>{
        let x = (Math.floor(Math.random()*256))
        let y = (Math.floor(Math.random()*256))
        let z = (Math.floor(Math.random()*256))
        let randomColor = "rgb(" + x + "," + y + "," + z + ")"
        document.body.style.backgroundColor = randomColor
    })
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

const winState = () =>{
    buttons.innerHTML = '<button onclick="startButton()" class="btn">Start</button>'
    onScreen.innerHTML = 'You Beat The Level. Click Start To Move On'
    player.hull = 20
    alienTeam.length = 0
    missileCount = 3
}
const destroyEnemy = () =>{
    center.innerHTML+=(`You Won.<br>`);
    alienTeam.shift()
    let enemy = document.querySelector('.enemy')
    enemy.remove()
    center.innerHTML+=(`You have ${player.hull} health remaining.<br>`);
}

const gainCredits = () =>{
    credits += Math.floor(Math.random()*10)+1
    let creditTotal = document.querySelector('.credits')
    creditTotal.innerHTML = `Credits: ${credits}`
}
const resetCredits = () =>{
    credits = 0
    let creditTotal = document.querySelector('.credits')
    creditTotal.innerHTML = `Credits: 0`
}
const fleeCredits = () =>{
    credits = Math.floor(credits/2)
    let creditTotal = document.querySelector('.credits')
    creditTotal.innerHTML = `Credits: ${credits}`
}

const levelUp = () =>{
    level = 1
    let levelCount = document.querySelector('.level')
    levelCount.innerHTML = `Level: 1`
}
const levelReset = () =>{
    level++
    let levelCount = document.querySelector('.level')
    levelCount.innerHTML = `Level: ${level}`
}