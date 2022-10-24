// imports
const path = require('path')
const express = require('express')
const logger = require('morgan')
const favicon = require('serve-favicon')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const DB = mongoose.connect(process.env.DATABASE_URL.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)).then(() =>{
    console.log("DB CONNECTION SUCCESSFUL!")
})

// express variable
const app = express()
// connect to config
dotenv.config()


// console assist
app.use(logger('dev'))

// body parser
app.use(express.json())

const port = process.env.PORT

app.listen(port, ()=>{
    console.log('server running on port', port, '...')
})