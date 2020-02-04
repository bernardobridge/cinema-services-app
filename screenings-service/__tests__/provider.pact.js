const { Verifier } = require('@pact-foundation/pact');

describe('PACT Verification', () => {
    let app;

    beforeAll(() => {
        process.env.SERVICE_PORT = 4002;
        app = require('../app');
        app.listen(process.env.SERVICE_PORT, () => {
            console.log(`App running on port ${process.env.SERVICE_PORT}.`)
        })
    });

    it('should verify expected interactions', () => {
        const opts = {
            pactBrokerUrl: process.env.PACT_BROKER_URL || 'https://limitless-hamlet-75386.herokuapp.com/',
            pactBrokerUsername: process.env.PACT_BROKER_USERNAME || 'admin',
            pactBrokerPassword: process.env.PACT_BROKER_PASSWORD || 'pacty123',
            provider: 'Screenings Service',
            providerBaseUrl: `http://localhost:${process.env.SERVICE_PORT}`,
            providerVersion: '1.0.0',
            publishVerificationResult: true,
            stateHandlers: {
                'what should we add here?': async () => {
                    // What about here?
                },
              }
        };

        return new Verifier().verifyProvider(opts);
    });

    afterAll(() => {
        app.close();
    })
})