////////////////////////////////////////////////////
// Requirements
////////////////////////////////////////////////////

const express =  require('express')
const app = express()
const pokemon = require('./models/pokemon')
const methodOverride = require('method-override');
require('dotenv').config()
const mongoose = require('mongoose');
const Pokemon = require('./models/poke.js');

////////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////////

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});



mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log('connected to mongo');
});


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res)=>{
    Pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        });
    });
})

app.post('/pokemon/', (req, res)=>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        console.log(createdPokemon.name + ' was created');
        res.redirect('/pokemon');


    })
});


app.get('/pokemon/new', (req, res)=>{
    res.render('New')
})


app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err,foundPokemon)=>{
        res.render('Show.jsx', {pokemon:foundPokemon })

    })
    
})


app.get('/pokemon/:id/edit', (req, res)=>{
    Pokemon.findById(req.params.id, (err,foundPokemon)=>{
        res.render('Edit.jsx', {pokemon:foundPokemon })
    })
})

app.delete('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndDelete(req.params.id, (err,deletedPokemon)=>{
        console.log(deletedPokemon.name + ' was deleted');
    res.redirect('/pokemon')
    })
    
});
app.put('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err,updatedPokemon)=>{
        console.log(updatedPokemon.name + ' was updated');
        res.redirect('/pokemon')
        })
    
});


////////////////////////////////////////////////////
// Server
////////////////////////////////////////////////////

app.listen(3000, (req, res)=>{
    console.log('listening on 3000');
})