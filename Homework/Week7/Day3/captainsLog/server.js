// requirements
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Log = require('./models/logs')
require('dotenv').config()
const methodOverride = require('method-override')
// connect to mongo
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongoDB');
})

// view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// body parser
app.use(express.urlencoded({extended:false}))

app.use(methodOverride('_method'))

app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'





// home redirect
app.get('/', (req, res)=>{
    res.redirect('/logs')
})

// NEW log page
app.get('/logs/new', (req, res)=>{
    res.render('New')
})


// Index Route
app.get('/logs', (req, res)=>{
    Log.find({}, (err, allLogs)=>{
        // console.log(err);
        // console.log('Found:', allLogs);
        res.render('Index', {logs: allLogs})
    }).sort({createdAt:-1})
})

// Create Route
app.post('/logs', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (err, createdLog)=>{
        // console.log(err);
        console.log("Created:", createdLog);
    })
    res.redirect('/logs')
})

// delete route
app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, foundLog)=>{
        // console.log(err);
        // console.log('Deleted:', foundLog);
        res.redirect('/logs')
    })
})

app.put('/logs/:id', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
        res.redirect(`/logs/${req.params.id}`)
    })
})

// Show Route
app.get('/logs/:id', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
        // console.log(err);
        res.render('Show', {log: foundLog})
    })
    
})



// edit route
app.get('/logs/:id/edit', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
        // console.log(err);
        res.render('Edit', {log: foundLog})
    })
    
})

app.listen(3000, (req, res)=>{
    console.log('listening on 3k');
})