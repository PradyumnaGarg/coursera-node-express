var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();
var promoIDRouter = express.Router();

promoRouter.use(bodyParser.json())
promoIDRouter.use(bodyParser.json())


//Creating endpoint for /promotions
promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});


//creating endpoint for /promotions/:promotionID
promoIDRouter.route('/')
.get((req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.promoId +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put((req, res, next) => {
  res.write('Updating the promotion: ' + req.params.promoId + '\n');
  res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
});

module.exports = {
    promoRouter, promoIDRouter
}
