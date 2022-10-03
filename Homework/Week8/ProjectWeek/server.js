/////////////////////////////////////
// Requirements
/////////////////////////////////////
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const methodOverride = require('method-override')

// models
const User = require('./models/users')
const Game = require('./models/games')
const Dlc = require('./models/dlc')
const Achievement = require('./models/achievements')
const Review = require('./models/reviews')

// connect to mongoose
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to MONGO');
    //////test
    // console.log(app.locals.loggedUser)
    // User.findOneAndUpdate({username: app.locals.loggedUser},{$pull: {achievements: 'achievement'}},{ new: true}, (err, foundUser)=>{
        

    
    
    //     console.log('Updated:', foundUser)
    // })
})

// view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

/////////////////////////////////////
// Local
/////////////////////////////////////
app.locals.loggedIn = false
app.locals.loggedUser = ''

/////////////////////////////////////
// Middleware
/////////////////////////////////////
app.use((req, res, next) => {
    // console.log(app.locals.loggedIn);
    // console.log(app.locals.loggedUser);
    next();
});
// body parser
app.use(express.urlencoded({ extended: false }))

// U&D routing
app.use(methodOverride('_method'))

// css
app.use(express.static('public'))

/////////////////////////////////////
// Routes
/////////////////////////////////////

// home RD
app.get('/', (req, res) => {
    if (app.locals.loggedIn === true) {
        res.redirect('/games')
    } else if (app.locals.loggedIn === false) {

        res.redirect('/login')
    }
})

///////////////////////////////////////// LOG IN
app.get('/login', (req, res) => {
    res.render('Login')
})


app.post('/login', (req, res) => {
    console.log(req.body);

    User.find({ username: req.body.username }, (err, foundUser) => {
        console.log("Found:", foundUser[0].username)
        if (req.body.password === foundUser[0].password) {
            app.locals.loggedIn = true
            app.locals.loggedUser = foundUser[0].username.toString()
            console.log('User ', app.locals.loggedUser, ' logged in = ', app.locals.loggedIn);
            res.redirect('/games')
        } else {
            console.log('User', req.body.username, 'logged in =', app.locals.loggedIn);
            res.redirect('back')
        }
    })
})


/////////////////////////////////////// SIGN UP
app.get('/signup', (req, res) => {
    res.render('Signup')

})

// Create new user
app.post('/signup', (req, res) => {
    console.log(req.body);

    User.create(req.body, (err, createdUser) => {
        console.log("Created:", createdUser)
    })
    res.redirect('/login')
})


//////////////////////////////////// LOG OUT
app.post('/logout', (req, res) => {
    app.locals.loggedIn = false
    app.locals.loggedUser = ''
    res.redirect('/login')
})

/////////////////////////////////// HOME PAGE / INDEX
app.get('/games', (req, res) => {
    if (app.locals.loggedIn === true) {
        Game.find({}, (err, allGames) => {
            res.render('Index', { games: allGames, username: app.locals.loggedUser })
        }).sort({ createdAt: -1 })
    } else if (app.locals.loggedIn === false) {

        res.redirect('/login')
    }
})

/////////////////////////////////////// NEW GAME

app.get('/games/new', (req, res) => {
    if (app.locals.loggedUser === 'admin') {
        res.render('New', {})
    } else if (app.locals.loggedUser !== 'admin') {

        res.redirect('/login')
    }
})

app.post('/games/post', (req, res) => {

    Game.create(req.body, (err, createdGame) => {
        console.log("Created:", createdGame)
    })
    res.redirect('/games')
})

///////////////////// NEW DLC / ACHIEVEMENT//
app.post('/dlc/post', (req, res) => {
    Dlc.create(req.body, (err, createdDlc) => {
        console.log("Created:", createdDlc)
    })
    res.redirect(`/games/${req.body.game}`)
})

app.post('/achievements/post', (req, res) => {
    Achievement.create(req.body, (err, createdAchievement) => {
        console.log("Created:", createdAchievement)
    })
    res.redirect(`/games/${req.body.parent_product}`)
})

//////////////////////////////////// SHOW PAGE

app.get('/games/:gameID', (req, res) => {
    if (app.locals.loggedIn === true) {
        Game.findOne({ title: req.params.gameID }, (err, foundGame) => {
            Dlc.find({ game: foundGame.title }, (err, allDlc) => {
                Review.find({ parent_product: foundGame.title }, (err, allReviews) => {
                    Achievement.find({ parent_product: foundGame.title }, (err, allAchievements) => {

                        res.render('Show', { game: foundGame, dlc: allDlc, username: app.locals.loggedUser, reviews: allReviews, achievements: allAchievements })
                    })
                })
            })
        })
    } else if (app.locals.loggedIn === false) {

        res.redirect('/login')
    }
})

app.patch('/buyDlc/:dlcID/', (req, res)=>{
    Dlc.findById(req.params.dlcID, (err, foundDlc)=>{

        User.findOneAndUpdate({username: app.locals.loggedUser},{$push: {dlcOwned: foundDlc._id}},{ new: true}, (err, foundUser)=>{
            
            res.redirect('/games')
            
            
            console.log('Updated:', foundUser)
        })
    })
})

app.patch('/buyGame/:gameID/', (req, res)=>{
    Game.findOne({title: req.params.gameID}, (err, foundGame)=>{

        User.findOneAndUpdate({username: app.locals.loggedUser},{$push: {gamesOwned: foundGame._id}},{ new: true}, (err, foundUser)=>{
            
            res.redirect('/games')
            
            
            console.log('Updated:', foundUser)
        })
    })
})

app.patch('/unlock/:achievementID/', (req, res)=>{
    Achievement.findById(req.params.achievementID, (err, foundAchievement)=>{
        User.findOneAndUpdate({username: app.locals.loggedUser},{$push: {achievements: foundAchievement._id}},{ new: true}, (err, foundUser)=>{
            
            res.redirect('/games')
            
            
            console.log('Updated:', foundUser)
        })
    })
})


app.post('/games/:gameID/update', (req, res) => {
    req.body.user = app.locals.loggedUser
    req.body.parent_product = req.params.gameID
    Review.create(req.body, (err, createdReview) => {
        console.log(createdReview);
    })
    res.redirect(`/games/${req.params.gameID}`)
})

/////////////////////////////////////DLC/Achievement SHOW/////

app.patch('/dlcUpdate/:dlcID', (req, res) => {
    Dlc.findByIdAndUpdate(req.params.dlcID, req.body, (err, foundDlc) => {
        Game.findOne({ title: foundDlc.game }, (err, foundGame) => {
            console.log('Updated: ', foundDlc.title, 'on', foundGame.title)
            res.redirect(`/games/${foundGame.title}`)
        })
    })
})

app.get('/games/:gameID/dlc/:dlcID', (req, res)=>{
    if (app.locals.loggedIn === true) {
        Dlc.findOne({title: req.params.dlcID}, (err, foundDlc)=>{
            res.render('Dlc', {dlc: foundDlc, game: req.params.gameID, username: app.locals.loggedUser})
        })
        
    } else if (app.locals.loggedIn === false) {
        res.redirect('/login')
    }
})

app.patch('/achievementUpdate/:achievementID', (req, res) => {
    Achievement.findByIdAndUpdate(req.params.achievementID, req.body, (err, foundAchievement) => {
        Game.findOne({ title: foundAchievement.parent_product }, (err, foundGame) => {
            console.log('Updated: ', foundAchievement.title, 'on', foundGame.title)
            res.redirect(`/games/${foundGame.title}`)
        })
    })
})

app.get('/games/:gameID/achievements/:achievementID', (req, res)=>{
    if (app.locals.loggedIn === true) {
        Achievement.findOne({title: req.params.achievementID}, (err, foundAchievement)=>{
            res.render('Achievement', {achievement: foundAchievement, game: req.params.gameID, username: app.locals.loggedUser})
        })
        
    } else if (app.locals.loggedIn === false) {
        res.redirect('/login')
    }
})

///////////////////////////////////// REVIEW SHOW

app.get('/reviews/:reviewID', (req, res) => {
    if (app.locals.loggedIn === true) {
        Review.findById(req.params.reviewID, (err, foundReview) => {
            Game.findOne({ title: foundReview.parent_product }, (err, foundGame) => {
                // console.log(foundGame);
                res.render('Review', { username: app.locals.loggedUser, review: foundReview, game: foundGame })
            })
        })
    } else if (app.locals.loggedIn === false) {
        res.redirect('/login')
    }
})

app.patch('/reviews/:reviewID', (req, res) => {
    Review.findByIdAndUpdate(req.params.reviewID, req.body, (err, foundReview) => {
        Game.findOne({ title: foundReview.parent_product }, (err, foundGame) => {
            console.log('Updated: ', foundReview._id, 'on', foundGame.title)
            res.redirect(`/games/${foundGame.title}`)
        })
    })
})



///////////////////////////USER SHOW/////////

app.get('/profile/:userID', (req, res) => {
    if (app.locals.loggedIn === true) {
        User.findOne({username: req.params.userID}, (err, foundUser)=>{
            res.render('Profile', {user: foundUser, username: app.locals.loggedUser})
        }).populate('gamesOwned').populate('dlcOwned').populate('achievements')
    } else if (app.locals.loggedIn === false) {
        res.redirect('/login')
    }
})

app.get('/profile/:userID/update', (req,res)=>{
    if (app.locals.loggedUser === req.params.userID){
        User.findOne({username: req.params.userID}, (err, foundUser)=>{
            res.render('Personal', {user: foundUser})
        })
    }else{
        res.redirect(`/profile/${req.params.userID}`)
    }
})
app.patch('/profile/:userID/update', (req,res)=>{
        User.findOneAndUpdate({username: req.params.userID}, req.body, (err, foundUser)=>{
            res.redirect(`/profile/${req.params.userID}`)
        })
})


///////////////////////////////////// EDIT PAGE


app.get('/games/:gameID/edit', (req, res) => {
    if (app.locals.loggedUser === 'admin') {
        Game.findOne({ title: req.params.gameID }, (err, foundGame) => {
            res.render('Edit', { game: foundGame})
        })
    } else if (app.locals.loggedUser !== 'admin') {

        res.redirect('/login')
    }
})
app.patch('/games/:gameID', (req, res) => {
    Game.findOneAndUpdate({ title: req.params.gameID }, req.body, (err, updatedGame) => {
    })
    res.redirect(`/games`)
})


////////////////////////// DELETE ////
//
//-----------> Delete Game


app.delete('/games/:gameID', (req, res) => {
    Game.findOneAndDelete({ title: req.params.gameID }, (err, foundGame) => {
        Review.deleteMany({ parent_product: foundGame.title }).then(() => {
            Dlc.deleteMany({ game: foundGame.title }).then(() => {
                Achievement.deleteMany({parent_product: foundGame.title}).then(()=>{

                    res.redirect('/games')
                })
            })
        })
    })
})

app.delete('/reviews/:reviewID', (req, res) => {
    Review.findByIdAndRemove(req.params.reviewID, (err, foundReview) => {
        console.log("Deleted: ", foundReview._id)
        Game.findOne({ title: foundReview.parent_product }, (err, foundGame) => {

            res.redirect(`/games/${foundGame.title}`)
        })
    })
})

app.delete('/achievements/:achievementID', (req, res) => {
    Achievement.findByIdAndRemove(req.params.achievementID, (err, foundAchievement) => {
        console.log("Deleted: ", foundAchievement)
        User.updateMany({ achievements: foundAchievement._id },{$pull: {achievements:{$in: [foundAchievement._id]}}},{ new: true}, (err, foundUser) => {
            res.redirect(`/games`)
            
        })
    })
})

app.delete('/dlc/:dlcID', (req, res) => {
    Dlc.findByIdAndRemove(req.params.dlcID, (err, foundDlc) => {
        console.log("Deleted: ", foundDlc)
        User.updateMany({ dlcOwned: foundDlc._id },{$pull: {dlcOwned:{ $in: [foundDlc._id]}}}, { new: true},(err, foundUser) => {
            res.redirect(`/games`)
            
        })
    })
})
app.delete('/profile/:userID', (req, res) => {
    User.findByIdAndRemove(req.params.userID, (err, foundUser) => {
        console.log("Deleted: ", foundUser)
        Review.deleteMany({ user: req.params.userID },(err, deletedReview) => {
            res.redirect(`/login`)
            
        })
    })
})



/////////////////////////////////////
// Server
/////////////////////////////////////

app.listen(3000, () => {
    console.log('listening on 3000');
})


////Test push/pull for profile arrays
