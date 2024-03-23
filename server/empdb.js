const mongoose = require('mongoose')

let empSchema = mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    designation : String,
    gender : String,
    course : Array,
    image : String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('empModel',empSchema)