const express = require('express') // const dont change, let can change
const app = express()
const path = require('path')
const port = process.env.port||3000

app.use(express.static(__dirname+"/views"))

app.get('/', (request, response)=>{
    response.sendFile(__dirname+"/views/index.html")
})

app.get('/highscores', (request, response)=>{
    response.sendFile(__dirname+"/views/highscores.html")
})

app.get('/test', (request, response)=>{
    response.sendFile(__dirname+"/views/test.html")
})

// app.listen sets up a connection
app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
})