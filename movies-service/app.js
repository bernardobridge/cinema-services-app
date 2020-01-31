const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./routes/movies');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/movies', movies);

module.exports = app;