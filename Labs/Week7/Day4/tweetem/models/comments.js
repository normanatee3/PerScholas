const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema( {
    user: {type:String,required:true},
    message: {type:String,required:true},
    likes: {type:Number,default:0},
    parent_id:{type:String,required:true}
    


    },
    {
    timestamps:true
})


const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment