const mongoose = require('mongoose')

const achievementSchema = new mongoose.Schema( {
    title: {type:String,required:true},
    unlock: {type:String,required:true},
    game: {type:String,required:true},
    score: {type:Number,required:true}


    })


const Achievement = mongoose.model("Achievement", achievementSchema)

module.exports = Achievement