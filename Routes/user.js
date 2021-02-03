const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');


router.get('/', UserController.getUser);
router.get('/:id', UserController.getUserById);

module.exports = router;