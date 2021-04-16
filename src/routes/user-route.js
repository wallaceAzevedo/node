const express = require('express');
const router = express.Router();
const controller = require('../controller/user-controller');

router.get('/',controller.getAllProducts);
router.post('/',controller.addProduct);
router.putt('/',controller.editProduct);
router.delete('/',controller.deleteProduct);

module.exports = router;