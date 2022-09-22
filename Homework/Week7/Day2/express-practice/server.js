// Import express
const express = require('express')

// Create a variable to hold express fucntions
const app = express()


// create route
app.get('/:id', (req, res)=>{
    res.send("<h1>Hello World</h1>")
    console.log(req.query);
})



// create server
app.listen(3000, ()=>{
    console.log('listening on 3000');
})