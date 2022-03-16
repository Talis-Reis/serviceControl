const express = require('express');
const router = express.Router();

const taskController = require('./controller/TaskController');

router.get('/users', taskController.buscarTodos);

module.exports = router;