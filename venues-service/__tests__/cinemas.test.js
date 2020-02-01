const app = require('../app');
const request = require('supertest')(app);
const nock = require('nock');

describe('GET all cinemas', () => {
    it('should return all cinemas', async () => {
        const res = await request
            .get('/cinemas')

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(5);

        res.body.forEach(cinema => {
            expect(cinema).toStrictEqual(
                expect.objectContaining({
                    cinema_id: expect.any(Number),
                    cinema_name: expect.any(String),
                    city: expect.any(String),
                    is_deluxe: expect.any(Boolean),
                })
            );

            expect(Object.keys(cinema)).toHaveLength(4);
        })
    });
})

describe('GET cinema with cinema_id', () => {
    it('should return the correct cinema with movies array', async () => {
        const cinemaId = '1';

        nock(`${process.env.SCREENINGS_SERVICE_URL}`)
            .get(`/schedules/${cinemaId}`)
            .reply(200, [
                {movie_id: 'sampleMovieId1'},
                {movie_id: 'sampleMovieId2'},
            ]);

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