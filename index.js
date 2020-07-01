var express = require('express');
var http = require('http');
var DishRouter = require('./routes/dishRouter');
var PromoRouter = require('./routes/promoRouter');
var LeaderRouter = require('./routes/leaderRouter');

var port = 3000;
var hostname = 'localhost';

var app = express();

app.use(express.static(__dirname + '/public'));

app.use('/dishes', DishRouter.dishRouter);
app.use('/dishes/:dishId', DishRouter.dishIDRouter);

app.use('/promotions', PromoRouter.promoRouter);
app.use('/promotions/:promoId', PromoRouter.promoIDRouter);

app.use('/leaders', LeaderRouter.leaderRouter);
app.use('/leaders/:leaderId', LeaderRouter.leaderIDRouter);



var server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

