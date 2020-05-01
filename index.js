const express = require('express');
const http = require('http');

const hostname = "localhost";
const Port = 3000;

const app = express();

app.use((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("This is express server");
})

const server = http.createServer(app);

server.listen(Port, hostname, ()=> {
    console.log(`Server is running at http://${hostname}:${Port}`);
})