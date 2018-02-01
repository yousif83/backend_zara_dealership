var express = require('express');
var router = express.Router();
var knex=require('../connection')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  knex('customers').select('*').then(customers =>{
    console.log(customers)
  })
});



module.exports = router;
