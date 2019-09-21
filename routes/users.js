const express = require('express');
const router = express.Router();

const users = require('../models/presentation.js');

router.get('/', (req, res) => {
    users.getUsers(req, res);
});

module.exports = router;
