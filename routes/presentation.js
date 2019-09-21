const express = require('express');
const router = express.Router();

const presentation = require('../models/presentation.js');

router.get('/', (req, res) => {
    presentation.getPresentation(req, res);
});

module.exports = router;
