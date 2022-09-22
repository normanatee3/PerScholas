const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())









// home redirect
app.get('/', (req, res)=>{
    res.redirect('/new')
})

// new log page
app.get('/new', (req, res)=>{
    res.render('New')
})


app.listen(3000, (req, res)=>{
    console.log('listening on 3k');
})