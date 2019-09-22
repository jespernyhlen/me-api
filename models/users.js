const db = require('../db/database.js');

const users = {
    getUsers: function(req, res) {
        let sql = `SELECT * FROM users`;

        db.all(sql, function(err, rows) {
            if (err) {
                return res.status(500).json({
                    error: {
                        status: 500,
                        path: '/users',
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

module.exports = users;
