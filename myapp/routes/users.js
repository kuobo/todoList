var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/post', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/put', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
