const mongoose = require('mongoose');
const{ stringify} = require('querystring')

const schema = mongoose.Schema({
    "name":String,
    "location":String,
    "position":String,
    "salary":Number

})
const postMod = mongoose.model('post',schema);
module.exports=postMod;