const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/Employee')

let loginSchema = mongoose.Schema({
    uname: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String
})

module.exports = mongoose.model('loginModel', loginSchema)