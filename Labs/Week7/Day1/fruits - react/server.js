// -------------------------------------
// Requirements
// -------------------------------------
require('dotenv').config()
const express = require('express');
const app = express();
const fruits = require('./models/fruits')
const mongoose = require('mongoose');
const Fruit = require('./models/fruit.js');


// -------------------------------------
// Middleware
// -------------------------------------

mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true


    // use in mongoose 5
});

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log('connected to mongo');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));

// -------------------------------------
// Routes
// -------------------------------------


app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('Index', {
            fruits: allFruits
        });
    });
});

app.get('/fruits/new', (req, res) => {
    res.render('New');
});

app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.redirect('/fruits');
    });
});

app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('Show', {
            fruit:foundFruit
        });
    });
});

// -------------------------------------
// Server
// -------------------------------------


app.listen(3000, () => {
    console.log('listening');
});