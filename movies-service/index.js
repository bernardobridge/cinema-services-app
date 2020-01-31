const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./routes/movies');

const port = process.env.SERVICE_PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/movies', movies);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})