const express = require('express');
const router = express.Router();
const {list, create} = require('../controllers/categoryControllers');

//MVC = modul view controller
router.get('/categories', list);
router.post('/create', create);

module.exports = router;