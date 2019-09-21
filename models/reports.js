const db = require('../db/database.js');

const presentation = {
    getReport: function(req, res) {
        let sql = 'SELECT kmom, text FROM reports WHERE kmom=' + req + '';

        db.get(sql, function(err, rows) {
            if (err) {
                return res.status(500).json({
                    error: {
                        status: 500,
                        path: '/reports/week/:id',
                        title: 'Database error',
                        message: err.message
                    }
                });
            }
            return res.status(200).json({
                data: rows
            });
        });
    },

    createReport: function(req, res) {
        // req contains user object set in checkToken middleware

        let sql = 'INSERT INTO reports (kmom, text) ' + 'VALUES (?, ?)';

        db.run(sql, req.body.kmom, req.body.text, function(err) {
            if (err) {
                return res.status(500).json({
                    error: {
                        status: 500,
                        path: 'POST /data INSERT',
                        title: 'Database error',
                        message: err.message
                    }
                });
            }

            return res.status(201).json({
                data: {
                    message: 'Report successfully created.'
                }
            });
        });
    }
};

module.exports = presentation;
