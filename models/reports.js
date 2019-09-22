const db = require('../db/database.js');

const presentation = {
    getReports: function(req, res) {
        let sql = 'SELECT kmom, text FROM reports';

        db.all(sql, function(err, rows) {
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
                        path: 'POST /reports INSERT',
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
    },

    updateReport: function(req, res) {
        let sql = 'UPDATE reports SET kmom=?, text=? WHERE kmom=?';
        db.run(sql, req.body.kmom, req.body.text, req.body.kmom, function(err) {
            if (err) {
                return res.status(500).json({
                    error: {
                        status: 500,
                        path: 'POST /reports/update UDATE',
                        title: 'Database error',
                        message: err.message
                    }
                });
            }

            return res.status(201).json({
                data: {
                    message: 'Report successfully updated.'
                }
            });
        });
    }
};

module.exports = presentation;
