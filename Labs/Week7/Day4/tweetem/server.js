const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const methodOverride = require('method-override')
const Tweet = require('./models/tweets')
const Comment = require('./models/comments')
const User = require('./models/users')
app.locals.loggedIn = false
app.locals.loggedUser = ''

console.log(app.locals.loggedIn);

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
    if(app.locals.loggedIn === true){
        res.redirect('/tweets')
    }else if(app.locals.loggedIn === false){

        res.redirect('/login')
    }
})

// login page
app.get('/login', (req, res)=>{
    res.render('Login')
})

// signup page
app.get('/signup', (req, res)=>{
    res.render('Signup')
    
})

app.post('/signup', (req, res)=>{
    console.log(req.body);
    
    User.create(req.body, (err, createdUser)=>{
        console.log("Created:", createdUser)
    })
    res.redirect('/login')
})

app.post('/login', (req, res)=>{
    console.log(req.body);
    
    User.find({username: req.body.username}, (err, foundUser)=>{
        if(err){
            console.log(err);
        }else{

            console.log("Found:", foundUser[0].username)
            if(req.body.password === foundUser[0].password){
                app.locals.loggedIn = true
                app.locals.loggedUser = foundUser[0].username.toString()
                console.log('User ', app.locals.loggedUser, ' logged in = ', app.locals.loggedIn);
                res.redirect('/tweets')
            }else{
                console.log('User', req.body.username, 'logged in =', app.locals.loggedIn);
                res.redirect('/login')
            }
        } 
        
    })
})

// new tweet
app.get('/tweets/new', (req, res)=>{
    if(app.locals.loggedIn === true){
        res.render('New', {user: app.locals.loggedUser})
    }else if(app.locals.loggedIn === false){

        res.redirect('/login')
    }
    console.log(app.locals.loggedIn);
    console.log(app.locals.loggedUser);
})

// main index
app.get('/tweets', (req, res)=>{
    if(app.locals.loggedIn === true){
        Tweet.find({}, (err, allTweets)=>{
            res.render('Index', {tweets: allTweets, user: app.locals.loggedUser})
        }).sort({createdAt:-1})
    }else if(app.locals.loggedIn === false){

        res.redirect('/login')
    }
})

// create

app.post('/tweets', (req, res)=>{
    req.body.user = app.locals.loggedUser
    Tweet.create(req.body, (err, createdTweet)=>{
        console.log("Created:", createdTweet)
    })
    res.redirect('/tweets/rd')
})
// redirect for live update
app.get('/tweets/rd', (req, res)=>{
    res.redirect('/tweets')
})
// log out
app.post('/logout', (req, res)=>{
    app.locals.loggedIn = false
    app.locals.loggedUser = ''
    res.redirect('/login')
})

// delete
app.delete('/tweets/:tweetID', (req, res)=>{
    Tweet.findByIdAndRemove(req.params.tweetID, (err, foundTweet)=>{
        Comment.deleteMany({ parent_id: req.params.tweetID }).then(()=>{
            res.redirect('/tweets')
        })
    })
})

// edit/put
app.put('/tweets/:tweetID', (req, res)=>{
    req.body.user = app.locals.loggedUser
    Tweet.findByIdAndUpdate(req.params.tweetID, req.body, (err, updatedTweet)=>{
        res.redirect(`/tweets/${req.params.tweetID}`)
    })
})
app.patch('/tweets/:tweetID/update', (req, res)=>{
    console.log('caughtitson');
    Tweet.findByIdAndUpdate(req.params.tweetID, {$inc: { comments: 1 }}, (err, updatedTweet)=>{
        console.log('updated', updatedTweet);
        req.body.parent_id = req.params.tweetID
        req.body.user = app.locals.loggedUser
        Comment.create(req.body, (err, createdComment)=>{
            console.log("Created:", createdComment)
            res.redirect(`/tweets/${req.params.tweetID}`)
        })
    })
})
app.patch('/tweets/:tweetID/:commentID/delete', (req, res)=>{
    console.log('caughtitson');
    Tweet.findByIdAndUpdate(req.params.tweetID, {$inc: { comments: -1 }}, (err, updatedTweet)=>{
        console.log('updated', updatedTweet);
        req.body.parent_id = req.params.tweetID
        Comment.findByIdAndRemove(req.params.commentID, (err, deletedComment)=>{
            console.log("Deleted:", deletedComment)
            res.redirect(`/tweets/${req.params.tweetID}`)
        })
    })
})

// show
app.get('/tweets/:tweetID', (req, res)=>{
    if(app.locals.loggedIn === true){
        Tweet.findById(req.params.tweetID, (err, foundTweet)=>{
            Comment.find({parent_id: req.params.tweetID}, (err, allComments)=>{
    
                res.render('Show', {tweet: foundTweet, comments: allComments, user: app.locals.loggedUser})
            })
        })
    }else if(app.locals.loggedIn === false){

        res.redirect('/login')
    }
})


// edit page
app.get('/tweets/:tweetID/edit', (req, res)=>{
    if(app.locals.loggedIn === true){
        Tweet.findById(req.params.tweetID, (err, foundTweet)=>{
            res.render('Edit', {tweet: foundTweet, user: app.locals.loggedUser})
        })
    }else if(app.locals.loggedIn === false){

        res.redirect('/login')
    }
})


app.listen(3000,()=>{
    console.log('listening on 3000');
})