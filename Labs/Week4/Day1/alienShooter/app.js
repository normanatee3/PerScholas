const player = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}

const alienTeam = []

const alienShip = {
    hull: 0,
    firepower: 0,
    accuracy: 0
}

const newShip = () =>{
    const newShip ={
    }
    newShip.hull = (Math.floor((Math.random()*30)+30))/10
    newShip.firepower = (Math.floor((Math.random()*20)+20))/10
    newShip.accuracy = (Math.floor((Math.random()*2)+6))/10
    alienTeam.push(newShip)
    return newShip
    
}
for(i = 0; i<6; i++){
    newShip()
}
console.log(alienTeam);