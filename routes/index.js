var express = require('express');
var router = express.Router();

/* GET home page. */
let scores=[]
router.get('/info', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/score', function(req, res, next) {
  scores.push(req.body)
  if(scores.length>10)
    scores=scores.slice(1)
  res.render('Ok' );
});

router.get('/scores', function(req, res, next) {
  res.render(scores);
});




module.exports = router;
