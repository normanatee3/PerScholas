const express = require('express');
const app = express();
const fruits = require('./models/fruits')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/fruits', (req, res) => {
    res.render('Index', { fruits: fruits });
});

app.get('/views', (req, res) => {
    res.render('Show');
});

app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});  




app.listen(3000, () => {
    console.log('listening');
});