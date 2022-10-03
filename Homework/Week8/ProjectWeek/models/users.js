const mongoose = require('mongoose')

const userSchema = new mongoose.Schema( {
    username: {type:String,unique:true,required:true},
    password: {type:String,required:true},
    image: {type:String,required:true,default:"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"},
    score: {type:Number,default:0},
    gamesOwned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    }],
    dlcOwned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dlc"
    }],
    achievements: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Achievement"
    }]


    })


const User = mongoose.model("User", userSchema)

module.exports = User