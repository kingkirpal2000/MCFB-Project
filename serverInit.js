const express = require("express")
const html = require("html")
const MongoClient = require("mongodb").MongoClient
const bodyParser = require("body-parser")
const path = require("path")
const server = express()


server.use(express.urlencoded({  extended: false  }))
server.use(bodyParser.urlencoded({extended: true}))


//MongoClient.connect('', (err, database) =>{


//})


//Routing
server.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});


server.post('/login', (req, res) =>{
    req.body.username  
})

server.post("/loginAttempt", (req, res) =>{
    console.log(req.body)
})

//Tells us what port this server is on
server.listen(3000, () => {
    console.log("Listening at port 3000")});
