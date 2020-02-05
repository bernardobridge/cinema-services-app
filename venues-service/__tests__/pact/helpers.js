const path = require('path');
const pkg = require('../../package.json');

const part = 'part-4';

const providerOptions = {
    consumer: `${pkg.name}-${part}`,
    provider: `screenings-service-${part}`,
    port: 5001,
    log: path.resolve(__dirname, './logs', 'screenings-pact.log'),
    dir: path.resolve(__dirname, './contracts'),
    spec: 2,
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