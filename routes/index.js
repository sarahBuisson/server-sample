var express = require('express');
var router = express.Router();
var cors = require('cors')


var whitelist = ['http://localhost:4200', 'http://sarahbuisson.github.io']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    console.log(req.header('Origin'))
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = {origin: true} // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = {origin: false} // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

/* GET home page. */
let scores = []
router.get('/info', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/score', cors(corsOptionsDelegate), function (req, res, next) {
    scores.push(req.body)
    if (scores.length > 10)
        scores = scores.slice(1)
    res.status(200).send('Ok');
});

router.get('/scores', cors(corsOptionsDelegate), function (req, res, next) {
    res.status(200).send(scores);
});

router.get('/scoresText', function (req, res, next) {
    res.status(200).send('scores');
});

router.get('/scoresJson', function (req, res, next) {
    res.status(200).json({scores: scores});
});


module.exports = router;
