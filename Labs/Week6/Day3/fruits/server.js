const express = require('express');
const app = express();
const fruitFile = require('./models/fruits')
// const ejs = require('ejs')


// app.set('view engine', 'ejs')

app.get('/fruits/', (req, res) => {
    res.send(fruitFile.string);
});

app.get('/views', (req, res) => {
    res.render('index.ejs');
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});




app.listen(3000, () => {
    console.log('listening');
});