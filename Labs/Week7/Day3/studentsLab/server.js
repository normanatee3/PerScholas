////////////////////////////////////////////////
// Requirements
////////////////////////////////////////////////

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const Student = require('./models/students')


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
    res.redirect('/students')
})

// ---->Index (R)
app.get('/students', (req, res) => {
    Student.find({}, (err, allStudents) => {
        console.log(err);

        res.render('Index.jsx', { students: allStudents })
    })
})

// ---->New (C)
app.get('/students/new', (req, res) => {
    res.render('New', {})
})
app.post('/students', (req, res) => {
    if (req.body.isPassing === 'on') {
        req.body.isPassing = true
    } else {
        req.body.isPassing = false
    }
    Student.create(req.body, (err, createdStudent) => {
        console.log(err)
        console.log("Just Added : ", createdStudent)
    })
    res.redirect('/students')
})


// ---->Seeds
app.get('/students/seeds', (req, res) => {
    Student.create([
        {
            name: 'Beyonce',
            gpa: '3.0',
            isPassing: false
        },
        {
            name: 'Rihanna',
            gpa: '4.0',
            isPassing: true
        },
        {
            name: 'J-Lo',
            gpa: '3.5',
            isPassing: true
        },

    ], (err, data) => {
        res.redirect('/students')
    })
})


// ---->Edit (U)
app.get("/students/:id/edit", (req, res) => {
    Student.findById(req.params.id, (err, foundStudent) => {
        //findStudent
        console.log(err)
        if (!err) {
            res.render("Edit", {
                student: foundStudent,
                //pass in the foundStudent so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});

app.put("/students/:id", (req, res) => {
    if (req.body.isPassing === "on") {
        req.body.isPassing = true;
    } else {
        req.body.isPassing = false;
    }
    Student.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
        console.log(err)
        console.log(updatedStudent);
        res.redirect(`/students/${req.params.id}`);
    });
});

app.delete("/students/:id", (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/students");
    });
});

// ---->Show (R/D)
app.get('/students/:id', (req, res) => {
    Student.findById(req.params.id, (err, foundStudent) => {
        console.log(err)
        console.log("Found: ", foundStudent);
        res.render('Show', { student: foundStudent })
    })
})

////////////////////////////////////////////////
// Server
////////////////////////////////////////////////
app.listen(3000, () => {
    console.log('Listening on 3k');
})