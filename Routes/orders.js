const express = require('express');
const router = express.Router();
const OrderController = require('../Controllers/OrderController');


router.get('/', OrderController.getOrder);
router.get('/:id', OrderController.getOrderById);
router.post('/neworder', OrderController.newOrder)


module.exports = router;


