// requirements
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Log = require('./models/logs')
require('dotenv').config()

// connect to mongo
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongoDB');
})

// view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// body parser
app.use(express.urlencoded({extended:false}))







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
        console.log(err);
        // console.log('Found:', allLogs);
        res.render('Index', {logs: allLogs})
    })
})

// Create Route
app.post('/logs', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (err, createdLog)=>{
        console.log(err);
        console.log("Created:", createdLog);
    })
    res.redirect('/logs')
})


// Show Route
app.get('/logs/:id', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
        console.log(err);
        res.render('Show', {log: foundLog})
    })
    
})

app.listen(3000, (req, res)=>{
    console.log('listening on 3k');
})