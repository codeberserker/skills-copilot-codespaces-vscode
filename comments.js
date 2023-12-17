// Create web server 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create app
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create route
app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered!`
    });
});

// Set port
app.listen(process.env.PORT || 8081);
