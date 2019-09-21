const express = require('express');
const router = express.Router();

const users = require('../models/users.js');

router.get('/users', (req, res) => {
    users.getUsers(req, res);
});

module.exports = router;
