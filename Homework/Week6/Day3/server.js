const express = require('express')
const app = express()
const ejs = require('ejs')






app.get('/greeting', (req, res) =>{
    res.send('Hello, Stranger')
})

app.get('/greeting/:name', (req, res) =>{
    res.send('Wow! Hello there, ' + req.params.name)
})

















app.listen(3000, (req,res)=>{
    console.log(`listening on 3000`);
})