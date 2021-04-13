const express = require('express');
const router = express.Router();
const controler = require('../controller/user-controller');

router.get('/',controller.get);
router.post('/',controller.addUser);

module.exports = router;