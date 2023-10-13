const http = require("http");
const app = require("./app");
var colors = require('colors');
require("dotenv").config();
const { mongoConnect } = require("./utils/mongo");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer(){
    await mongoConnect()
    server.listen(PORT, ()=>{
        console.log(`Starting server on port ${PORT}`.red.bold);
    })
    
}

startServer();