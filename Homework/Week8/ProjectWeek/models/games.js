const mongoose = require('mongoose')
const { title } = require('process')

const gameSchema = new mongoose.Schema( {
    title: {type:String,unique:true,required:true},
    dev: {type:String,required:true},
    description: {type:String},
    price: {type:String,required:true},
    image: {type:String,required:true,default:'https://react.semantic-ui.com/images/wireframe/image.png'}

    })


const Game = mongoose.model("Game", gameSchema)

module.exports = Game