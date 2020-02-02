const { Pact } = require("@pact-foundation/pact");
const { providerOptions, startTestApp } = require('./helpers');

describe('GET cinema with cinema_id', () => {
    let provider;
    let request;

    beforeAll(async () => {
        provider = new Pact(providerOptions);
        request = startTestApp(``); // TO_BE_FILLED

        await provider.setup();
    })

    afterAll(async () => {
        await provider.verify();
        await provider.finalize();
    });

    it('should return the correct cinema with movies array', async () => {
        const cinemaId = '1';

        await provider.addInteraction({
            uponReceiving: '', // TO_BE_FILLED
            withRequest: {
              method: '', // TO_BE_FILLED
              path: '', // TO_BE_FILLED
            },
            willRespondWith: {
              status: , // TO_BE_FILLED
              headers: { }, // TO_BE_FILLED
              body: [ ], // TO_BE_FILLED
            }
          });

        const res = await request
            .get(`/cinemas/${cinemaId}`)

        expect(res.statusCode).toEqual(200);
        expect(res.body).toStrictEqual(
            expect.objectContaining({
                cinema_id: expect.any(Number),
                cinema_name: expect.any(String),
                city: expect.any(String),
                is_deluxe: expect.any(Boolean),
            })
        );
        expect(res.body.movies).toStrictEqual([
            'sampleMovieId1',
            'sampleMovieId2']
        );
    });
})