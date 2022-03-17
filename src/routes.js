const express = require('express');
const router = express.Router();

const userController = require('./controller/UserController');
const authenticationController = require('./controller/AuthenticationController');

router.post('/user/authentication', authenticationController.loginAuthentication);

router.get('/users', userController.findAll);
router.get('/user/:ctrl_user', userController.findById);
router.post('/create/user', userController.createUser);

module.exports = router;