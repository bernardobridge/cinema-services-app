require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const screenings = require('./routes/screenings');
const schedules = require('./routes/schedules');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/screenings', screenings);
app.use('/schedules', schedules);

module.exports = app;