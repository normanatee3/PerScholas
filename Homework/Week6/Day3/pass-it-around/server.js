const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
    res.send("<h1> 99 game breaking bugs in the code </h1>" + "<h1>99 game breaking bugs</h1>" + `<h1><a href="/98">ya take one down, patch it around</a></h1>` + `<h1>98 game breaking bugs in the code.</h1>`)
})
app.get('/0', (req, res)=>{
    
    res.send("<h1> 0 game breaking bugs in the code </h1>" + "<h1>0 game breaking bugs</h1>" + `<h1><a href="/">ya go to the server, and break your game further</a></h1>` + `<h1>99 game breaking bugs in the code.</h1>`)
})

app.get('/:bottle', (req, res)=>{
    const oldBottles = parseInt(req.params.bottle)
    let newBottles = (oldBottles - 1).toString()
    let bug = 0
    let random = Math.random()
    if(random > 0.8){
        bug += 1
    }else{
        bug = 0
    }
    if(bug === 1){
        newBottles = (oldBottles + Math.floor(Math.random()*10)).toString()
    }
    res.send(
        `<h1>`+ req.params.bottle + ` game breaking bugs in the code </h1>`
        + `<h1>`+ req.params.bottle + ` game breaking bugs</h1>`
        + `<h1><a href="/` + newBottles + `">ya take one down, patch it around</a></h1>` 
        + `<h1>` + newBottles + ` game breaking bugs in the code.</h1>`)
})








app.listen(3000, (req, res)=>{
    console.log('listening on 3 racks');
})