var express = require('express');
var router = express.Router();
var resultController = require('../daoController/resultController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get', resultController.getData);
router.post('/insert', resultController.insertData);
router.post('/search', resultController.searchData);
router.put('/update', resultController.updateData);
router.delete('/delete', resultController.deleteData);


module.exports = router;
