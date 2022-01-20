var express = require('express')
var app = express()
var path = require('path')
var bodyParser= require('body-parser')
var mongoose = require("mongoose")

// basic code for saving an entry
// model of data
var Game = mongoose.model('Game', {nameofGame:String})
var game = new Game({nameofGame:"Skyrim"})
game.save().then(function(){
    console.log("Game Saved")
})

// setup connection to mongoose
mongoose.connect('mongodb://localhost:27017/gameEntries',{
    useNewURLParser:true
}).then(function(){
    console.log("Connected to MongoDB Database")
}).catch(function(err){
    console.log(err)
})

app.use(express.static(__dirname+"/views"))
app.listen(3000, function(){
    console.log("Listening on port 3000")
})