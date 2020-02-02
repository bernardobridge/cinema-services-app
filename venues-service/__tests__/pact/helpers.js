const path = require('path');

const providerOptions = {
    consumer: 'Venues Service',
    provider: 'Screenings Service',
    port: 5001,
    log: path.resolve(__dirname, './logs', 'screenings-pact.log'),
    dir: path.resolve(__dirname, './contracts'),
    spec: 2,
    pactfileWriteMode: 'update',
};

const startTestApp = (screeningsServiceUrl) => {
    process.env.SCREENINGS_SERVICE_URL = screeningsServiceUrl;

    const app = require('../../app');
    return request = require('supertest')(app);
};

module.exports = {
    startTestApp,
    providerOptions,
}