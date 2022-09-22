const mongoose = require('mongoose')


const snackSchema = new mongoose.Schema({
    name: {type:String,required:true},
    flavor: {type:String,required:true},
    cost: {type:String,required:true},
    imageLink: {type:String,required:true},
    isTasty: Boolean
})



const Snack = mongoose.model('Snack', snackSchema)

module.exports = Snack