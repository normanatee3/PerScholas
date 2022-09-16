const express = require('express')
const app = express()
const pokemon = require('./models/pokemon')

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res)=>{
    res.render('Index.ejs')
})














app.listen(3000, (req, res) =>{
    console.log(`listening on 3000`);
})