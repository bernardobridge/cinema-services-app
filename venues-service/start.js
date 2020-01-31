const app = require('./app');
const port = process.env.SERVICE_PORT;

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})