//  Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs')

const plants = ["lily", "rose", "lavender", "daisy", "corpse flower", "monstera deliciosa"]
// Mount middleware (app.use)


// Mount routes

app.get('/', (req,res) =>{
    res.render('index.ejs')
});
app.get('/home', (req,res) =>{
    res.render('home.ejs')
});
app.get('/about', (req,res) =>{
    res.render('about.ejs')
});
app.get('/contact', (req,res) =>{
    res.render('contact.ejs')
});
app.get('/:indexOfPlantsArray', (req,res) =>{
    res.send(plants[req.params.indexOfPlantsArray])
    res.send('this is the index: ' + req.params.indexOfPlantsArray)
})
// Tell the app to listen on port 3000
app.listen(3000,()=>{
    console.log('Listening on port 3000')
});

