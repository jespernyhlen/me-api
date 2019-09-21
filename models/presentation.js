const db = require('../db/database.js');

const presentation = {
    getPresentation: function(req, res) {
        let sql = `SELECT name, present FROM presentation WHERE name='jesper'`;

        db.get(sql, function(err, rows) {
            if (err) {
                return res.status(500).json({
                    error: {
                        status: 500,
                        path: '/present',
                        title: 'Database error',
                        message: err.message
                    }
                });
            }
            return res.status(200).json({
                data: rows
            });
        });
    }
};

module.exports = presentation;
