const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const methodOverride = require('method-override')
const Tweet = require('./models/tweets')
const Comment = require('./models/comments')
const User = require('./models/users')

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to MONGO');
})


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({extended:false}))

app.use(methodOverride('_method'))

app.use(express.static('public'))

// home RD
app.get('/', (req, res)=>{
    res.redirect('/tweets')
})

// main index
app.get('/tweets', (req, res)=>{
    Tweet.find({}, (err, allTweets)=>{
        res.render('Index', {tweets: allTweets})
    }).sort({createdAt:-1})
})

// create

app.post('/tweets', (req, res)=>{
    Tweet.create(req.body, (err, createdTweet)=>{
        console.log("Created:", createdTweet)
    })
    res.redirect('/tweets')
})

// delete
app.delete('/tweets/:tweetID', (req, res)=>{
    Tweet.findByIdAndRemove(req.params.id, (err, foundTweet)=>{
        res.redirect('/tweets')
    })
})

// edit/put
app.put('/tweets/:tweetID', (req, res)=>{
    Tweet.findByIdAndUpdate(req.params.id, req.body, (err, updatedTweet)=>{
        res.redirect(`/tweets/${req.params.id}`)
    })
})

// show
app.get('/tweets/:tweetID', (req, res)=>{
    Tweet.findById(req.params.id, (err, foundTweet)=>{
        res.render('Show', {tweet: foundTweet})
    })
    
})


// edit page
app.get('/logs/:id/edit', (req, res)=>{
    Tweet.findById(req.params.id, (err, foundTweet)=>{
        res.render('Edit', {tweet: foundTweet})
    })
    
})


app.listen(3000,()=>{
    console.log('listening on 3000');
})