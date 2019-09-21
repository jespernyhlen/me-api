const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const reports = require('../models/reports.js');

require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

router.get('/reports/week/:id', (req, res) =>
    reports.getReport(req.params.id, res)
);

router.post(
    '/reports',
    (req, res, next) => checkToken(req, res, next),
    (req, res) => reports.createReport(req, res)
);

function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, jwtSecret, function(err, decoded) {
            if (err) {
                // send error response
            }

            // Valid token send on the request
            next();
        });
    } else {
        return res.status(401).json({
            errors: {
                status: 401,
                source: req.path,
                title: 'No token',
                detail: 'No token provided in request headers'
            }
        });
    }
}

module.exports = router;
