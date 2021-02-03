const express = require('express');
const router = express.Router();
const OrderController = require('../Controllers/OrderController');


router.get('/', OrderController.getOrder);
router.get('/:id', OrderController.getOrderById);
router.put('/:id', OrderController.updateOrder);
router.post('/neworder', OrderController.newOrder)
router.delete('/deleteorder/:id', OrderController.deleteOrder)


module.exports = router;


