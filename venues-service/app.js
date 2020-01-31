const express = require('express');
const bodyParser = require('body-parser');
const cinemas = require('./routes/cinemas');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/cinemas', cinemas);

module.exports = app;