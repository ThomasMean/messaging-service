import express from 'express';
const message = require('./message');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080; // default port to listen



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use('/message', message);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
