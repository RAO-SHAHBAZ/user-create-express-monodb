const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://0.0.0.0/rao').then(()=>{
    console.log("Connected With DATA BASE");
    
})

module.exports = connection;