const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema( {
    user: {type:String,required:true},
    message: {type:String,required:true},
    likes: {type:Number,default:0},
    comments: {type:Number,default:0}


    },
    {
    timestamps:true
})


const Tweet = mongoose.model("Tweet", tweetSchema)

module.exports = Tweet