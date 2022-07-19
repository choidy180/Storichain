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

router.get('/series', function(req, res, next) {
  res.render('index', { 
    title: 'Series', 
    page: "series.ejs",
    head: "Series"
  });
});
router.get('/sale_policy', function(req, res, next) {
  res.render('index', { 
    title: 'sale_policy', 
    page: "sale_policy.ejs",
    head: "sale_policy"
  });
});
router.get('/sale_epsiode', function(req, res, next) {
  res.render('index', { 
    title: '시리즈 추가', 
    page: "sale_epsiode .ejs",
    head: "sale_epsiode "
  });
});
router.get('/sales_examin', function(req, res, next) {
  res.render('index', { 
    title: '판매심사', 
    page: "admin/sales_examin.ejs",
    head: "sales_examin"
  });
});
module.exports = router;