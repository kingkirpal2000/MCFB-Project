const express = require("express")
const path = require("path")
const server = express()

server.set("view-engine", "ejs")  //using the ejs view engine
server.use(express.urlencoded({  extended: false  }))

//Routing
server.get('/', (req, res) => {
    res.render('index.ejs')
});

server.get('/login', (req, res) => {
    res.render('login.ejs')
})

server.get('/register', (req,res) => {
    res.render('register.ejs')
})


//Why use post requests?
server.post('/login', (req, res) =>{
    req.body.username  //This is where I stopped: 10:42 Node.js Passport Login System tutorial
                        //the "username" correspondes to the name field in an html tag
})


//Tells us what port this server is on
server.listen(3000, () => {
    console.log("Listening at port 3000")});
