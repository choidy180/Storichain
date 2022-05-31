var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', page: "" });
});
router.get('/topup', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    page: "cash/topup.ejs",
    balance: "5,000,222,111"
  });
});
router.get('/checkout', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    page: "cash/checkout.ejs",
  });
});
router.get('/paymentdone', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    page: "cash/paymentdone.ejs",
  });
});
module.exports = router;