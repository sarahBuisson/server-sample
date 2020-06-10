var express = require('express');
var router = express.Router();

/* GET home page. */
let scores = []
router.get('/info', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/score', function (req, res, next) {
    scores.push(req.body)
    if (scores.length > 10)
        scores = scores.slice(1)
    res.send('Ok');
});

router.get('/scores', function (req, res, next) {
    res.send(scores);
});

router.get('/scoresText', function (req, res, next) {
    res.send('scores');
});

router.get('/scoresJson', function (req, res, next) {
    res.json({scores:scores});
});


module.exports = router;
