const express = require('express');
const bodyParser = require('body-parser');
const cinemas = require('./routes/cinemas');

const port = process.env.SERVICE_PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/cinemas', cinemas);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})