const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
})

const user = mongoose.model("uusser", userSchema);

module.exports = {user}