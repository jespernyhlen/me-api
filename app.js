const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const presentation = require('./routes/presentation.js');
const reports = require('./routes/reports.js');
const register = require('./routes/register.js');
const login = require('./routes/login.js');

const port = 1337;

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

// Register user
app.post('/register', register);
app.post('/login', login);
app.post('/reports', reports);

// Start up server
app.listen(port, () => console.log(`Example API listening on port ${port}!`));
