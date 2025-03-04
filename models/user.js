// We Are Making Schema For Users

const mongoose = require('mongoose')

// We Are Creating a Schema through monogoos and store in the userSchema veriable
const userSchema = new mongoose.Schema({
        username :String,
        email : String,
        password: String

})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel