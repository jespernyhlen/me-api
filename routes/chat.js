const express = require('express');
const router = express.Router();

const chat = require('../models/chat.js');

router.post('/insert', (req, res) => {
    chat.insertMessage(req.body, res);
});

router.get('/list', async (req, res) => {
    chat.getMessages(req, res);
});

module.exports = router;
