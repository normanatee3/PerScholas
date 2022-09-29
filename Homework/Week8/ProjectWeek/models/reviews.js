const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema( {
    user: {type:String,required:true},
    rating: {type:String,required:true},
    message: {type:String,required:true},
    parent_product:{type:String,required:true}
    


    },
    {
    timestamps:true
})


const Review = mongoose.model("Review", reviewSchema)

module.exports = Review