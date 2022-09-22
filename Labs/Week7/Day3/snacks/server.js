////////////////////////////////////////////////
// Requirements
////////////////////////////////////////////////

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const Snack = require('./models/snacks')


const methodOverride = require('method-override')
require('dotenv').config()

// add engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// connect to mongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to mongo");
});

////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////

// middleware example
app.use((req, res, next) => {
    console.log('I run on all routes');
    next()
})


app.use(express.urlencoded({ extended: false }))

app.use(methodOverride("_method"))


////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////

// home redirect
app.get('/', (req, res) => {
    res.redirect('/snacks')
})

// ---->Index (R)
app.get('/snacks', (req, res) => {
    Snack.find({}, (err, allSnacks) => {
        console.log(err);

        res.render('Index.jsx', { snacks: allSnacks })
    })
})

// ---->New (C)
app.get('/snacks/new', (req, res) => {
    res.render('New', {})
})
app.post('/snacks', (req, res) => {
    if (req.body.isTasty === 'on') {
        req.body.isTasty = true
    } else {
        req.body.isTasty = false
    }
    Snack.create(req.body, (err, createdSnack) => {
        console.log(err)
        console.log("Just Added : ", createdSnack)
    })
    res.redirect('/snacks')
})


// ---->Seeds
app.get('/snacks/seeds', (req, res) => {
    Snack.create([
        {
            name: 'Beyonce',
            flavor: '3.0',
            cost: '3.0',
            isTasty: false
        },
        {
            name: 'Rihanna',
            flavor: '4.0',
            cost: '4.0',
            isTasty: true
        },
        {
            name: 'J-Lo',
            flavor: '3.5',
            cost: '3.5',
            isTasty: true
        },

    ], (err, data) => {
        res.redirect('/snacks')
    })
})


// ---->Edit (U)
app.get("/snacks/:id/edit", (req, res) => {
    Snack.findById(req.params.id, (err, foundSnack) => {
        //findSnack
        console.log(err)
        if (!err) {
            res.render("Edit", {
                snack: foundSnack,
                //pass in the foundSnack so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});

app.put("/snacks/:id", (req, res) => {
    if (req.body.isTasty === "on") {
        req.body.isTasty = true;
    } else {
        req.body.isTasty = false;
    }
    Snack.findByIdAndUpdate(req.params.id, req.body, (err, updatedSnack) => {
        console.log(err)
        console.log(updatedSnack);
        res.redirect(`/snacks/${req.params.id}`);
    });
});

app.delete("/snacks/:id", (req, res) => {
    Snack.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/snacks");
    });
});

// ---->Show (R/D)
app.get('/snacks/:id', (req, res) => {
    Snack.findById(req.params.id, (err, foundSnack) => {
        console.log(err)
        console.log("Found: ", foundSnack);
        res.render('Show', { snack: foundSnack })
    })
})

////////////////////////////////////////////////
// Server
////////////////////////////////////////////////
app.listen(3000, () => {
    console.log('Listening on 3k');
})