const mongoose = require('mongoose')

const achievementSchema = new mongoose.Schema( {
    title: {type:String,required:true},
    unlock: {type:String,required:true},
    parent_product: {type:String,required:true},
    score: {type:Number,required:true},
    image: {type:String,required:true, default:'https://react.semantic-ui.com/images/wireframe/image.png'}


    })


const Achievement = mongoose.model("Achievement", achievementSchema)

module.exports = Achievement