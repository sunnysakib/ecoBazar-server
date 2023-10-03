const http = require("http");
const app = require("./app");

const PORT = 8000;

const server = http.createServer(app);

async function startServer(){

    server.listen(PORT, ()=>{
        console.log(`Starting server on port ${PORT}`);
    })
}