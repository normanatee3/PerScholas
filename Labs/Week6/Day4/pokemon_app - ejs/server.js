const express = require('express')
const app = express()
const pokemon = require('./models/pokemon')
const ejs = require('ejs')
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res)=>{
    res.render('Index.ejs', {pokemon})
})
app.get('/pokemon/:id', (req, res)=>{
    let pokeID = req.params.id
    res.render('Show.ejs', {pokemon, pokeID})
})














app.listen(3000, (req, res) =>{
    console.log(`listening on 3000`);
    
})