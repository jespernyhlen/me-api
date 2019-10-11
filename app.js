const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const chat = require('./routes/chat.js');

const presentation = require('./routes/presentation.js');
const reports = require('./routes/reports.js');
const register = require('./routes/register.js');
const login = require('./routes/login.js');

// const dsn = process.env.DBWEBB_DSN || 'mongodb://localhost:27017/mumin';
// Production port
const port = 8333;

// Development port
// const port = 1337;

app.use(cors());

app.options('*', cors());

app.disable('x-powered-by');

app.set('view engine', 'ejs');

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This is middleware called for all routes.
// Middleware takes three parameters.
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});

app.get('/', presentation);

app.get('/reports/week/:id', reports);
app.get('/reports/week/:id', reports);

app.post('/register', register);
app.post('/login', login);

app.get('/reports', reports);
app.post('/reports', reports);
app.post('/reports/update', reports);

// Return a JSON object with list of all documents within the collection.

app.get('/list', chat);
app.post('/insert', chat);

// Start up server
const server = app.listen(port, () =>
    console.log(`Example API listening on port ${port}!`)
);

module.exports = server;
