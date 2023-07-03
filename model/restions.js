const mongoose = require('mongoose');

const login = new mongoose.Schema({
    name: { type : String},
    gmail : { type : String},
    passwords: { type : String }
})

const res = mongoose.model('nodedemo' , login)

module.exports = res;