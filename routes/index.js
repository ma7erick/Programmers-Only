var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('auth.html', { root: 'public' });
});

router.get('/user', function(req, res, next) {
  res.sendFile('user.html', { root: 'public'});
});



module.exports = router;
