const { Pact } = require("@pact-foundation/pact");
const { providerOptions, startTestApp } = require('./helpers');

describe('GET cinema with cinema_id', () => {
    let provider;
    let request;

    beforeAll(async () => {
        provider = new Pact(providerOptions);
        request = startTestApp(`http://localhost:${provider.opts.port}`);

        await provider.setup();
    })

    afterAll(async () => {
        await provider.verify();
        await provider.finalize();
    });

    it('should return the correct cinema with movies array', async () => {
        const cinemaId = '1';

        await provider.addInteraction({
            uponReceiving: `a GET request to /schedules/${cinemaId}`,
            withRequest: {
              method: 'GET',
              path: `/schedules/${cinemaId}`,
            },
            willRespondWith: {
              status: 200,
              headers: { 'Content-Type': 'application/json; charset=utf-8' },
              body: [
                {movie_id: 'sampleMovieId1'},
                {movie_id: 'sampleMovieId2'}
              ]
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