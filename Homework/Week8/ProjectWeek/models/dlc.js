const mongoose = require('mongoose')

const dlcSchema = new mongoose.Schema( {
    title: {type:String,unique:true,required:true},
    game: {type:String,required:true},
    description: {type:String},
    price: {type:String,required:true},
    image: {type:String,required:true, default:'https://react.semantic-ui.com/images/wireframe/image.png'}


    })


const Dlc = mongoose.model("Dlc", dlcSchema)

module.exports = Dlc