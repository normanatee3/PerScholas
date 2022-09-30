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
})

// view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

/////////////////////////////////////
// Local
/////////////////////////////////////
app.locals.loggedIn = true
app.locals.loggedUser = 'admin'

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
            res.render('Index', { games: allGames, user: app.locals.loggedUser })
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

    // unravel
    let preLink = req.body.title
    preLink.replace(/[^\W_]/g)
    console.log(preLink);
    req.body.link = preLink
    // unravel^

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

                        res.render('Show', { game: foundGame, dlc: allDlc, user: app.locals.loggedUser, reviews: allReviews, achievements: allAchievements })
                    })
                })
            })
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
                res.render('Review', { user: app.locals.loggedUser, review: foundReview, game: foundGame })
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


app.post('/games/:gameID/update', (req, res) => {
    req.body.user = app.locals.loggedUser
    req.body.parent_product = req.params.gameID
    Review.create(req.body, (err, createdReview) => {
        console.log(createdReview);
    })
    res.redirect(`/games/${req.params.gameID}`)
})

app.patch('/buy/:gameID/', (req, res)=>{
    User.findOneAndUpdate({username: app.locals.loggedUser},{$push: {gamesOwned: req.params.gameID}},{ new: true}, (err, foundUser)=>{
        
        res.redirect('/games')
        
        
        console.log('Updated:', foundUser)
    })
})
///////////////////////////////////// EDIT PAGE


app.get('/games/:gameID/edit', (req, res) => {
    if (app.locals.loggedUser === 'admin') {
        Game.findOne({ title: req.params.gameID }, (err, foundGame) => {
            res.render('Edit', { game: foundGame, user: app.locals.loggedUser })
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
                res.redirect('/games')
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



/////////////////////////////////////
// Server
/////////////////////////////////////

app.listen(3000, () => {
    console.log('listening on 3000');
})


