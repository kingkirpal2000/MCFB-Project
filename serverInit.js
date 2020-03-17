const express = require("express");
const path = require("path");
const app = express();


//Tells us what port this server is on
app.listen(3000, () => console.log("Listening at port 3000"));

//Lets get this server to grab index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

