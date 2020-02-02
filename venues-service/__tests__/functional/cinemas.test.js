const app = require('../../app');
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