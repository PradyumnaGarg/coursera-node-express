const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const hostname = "localhost";
const Port = 3000;

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.all('/dishes', (req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req,res,next)=> {
    res.end('Will send all the dishes to you!');
});

app.post('/dishes', (req,res,next)=> {
    res.end('Will add the dish: ' + req.body.name + 
    ' with details: ' + req.body.descrpition);
});

app.put('/dishes', (req,res,next)=> {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes', (req,res,next)=> {
    res.end('Deleting all dishes');
});

app.all('/dishes/:dishId', (req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes/:dishId', (req,res,next)=> {
    res.end('Will send dish: ' + req.params.dishId + ' to you!');
});

app.post('/dishes/:dishId', (req,res,next)=> {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'
    + req.params.dishId);
});

app.put('/dishes/:dishId', (req,res,next)=> {
    res.write("Updating the dish: " + req.params.dishId +
    '\n');
    res.end('Will add the dish: ' + req.body.name + 
    ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req,res,next)=> {
    res.end('Deleting dish: '+ req.params.dishId);
});


const server = http.createServer(app);

server.listen(Port, hostname, ()=> {
    console.log(`Server is running at http://${hostname}:${Port}`);
})