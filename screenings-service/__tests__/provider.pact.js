const { Verifier } = require('@pact-foundation/pact');
const db = require('../db');

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
                'screenings service has cinema with cinemaId=5': async () => {
                    const schedules = [{
                        cinema_id: 5,
                        movie_id: '5aa7b461-c3ab-4c7b-b875-f77ead576309',
                        start_date: '2020-01-10',
                        end_date: '2020-03-01',
                    }]

                    await db('schedules').del();
                    await db('schedules').insert(schedules);
                },
              }
        };

        return new Verifier().verifyProvider(opts);
    });

    afterAll(() => {
        app.close();
    })
})