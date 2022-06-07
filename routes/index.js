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
    balance: "5,000,222,111",
    head: "TORI Cash Topup"
  });
});
router.get('/checkout', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    page: "cash/checkout.ejs",
    head: "구매확인 및 결제방법",
  });
});
router.get('/paymentdone', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    page: "cash/paymentdone.ejs",
    head: "결제완료"
  });
});
router.get('/cashwallet', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    page: "cash/cashwallet.ejs",
    head: "나의 캐시 지갑"
  });
});
module.exports = router;