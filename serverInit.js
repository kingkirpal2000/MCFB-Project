const express = require("express")
const {MongoClient} = require('mongodb');
const path = require("path")
const server = express()


async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

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
