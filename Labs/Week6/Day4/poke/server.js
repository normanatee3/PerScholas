const express =  require('express')
const app = express()
const pokemon = require('./models/pokemon')
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res)=>{
    res.render('Index.jsx', {pokemon})
})

app.post('/pokemon/', (req, res)=>{
    pokemon.push(req.body)
    res.redirect('/pokemon');
});


app.get('/pokemon/new', (req, res)=>{
    res.render('New')
})


app.get('/pokemon/:id', (req, res)=>{
    res.render('Show.jsx', {mon : pokemon[req.params.id], pokemon : pokemon })
})
app.get('/pokemon/:id/edit', (req, res)=>{
    res.render('Edit.jsx', {mon : pokemon[req.params.id], pokemon : pokemon })
})

app.delete('/pokemon/:id', (req, res)=>{
    pokemon.splice(req.params.id, 1)
    res.redirect('/pokemon')
    
    
});
app.put('/pokemon/:id', (req, res)=>{
    pokemon.splice(req.params.id, 1, req.body)
    res.redirect('/pokemon')
    
    
});


app.listen(3000, (req, res)=>{
    console.log('listening on 3000');
})