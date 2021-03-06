const express = require('express');
const router = express.Router();

const auth = require('../models/auth.js');

router.post('/register', (req, res) => {
    auth.register(res, req.body);
});

module.exports = router;
