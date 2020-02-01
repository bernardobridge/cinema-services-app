const app = require('../app');
const request = require('supertest')(app);

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
        )

        expect(res.body.movies).toStrictEqual([
            "1ee1cb09-37b8-429a-8912-c50f144495ca",
            "e6373c5d-1c51-4b9c-afd9-83201809d703"]
        )
    });
})