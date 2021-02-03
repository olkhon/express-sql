const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');


router.get('/', UserController.getUser);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/deleteuser/:id', UserController.deleteUser)
router.post('/newuser', UserController.newUser)

module.exports = router;