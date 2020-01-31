const axios = require('axios');
const screeningServiceUrl = 'http://localhost:3002';

const getMoviesForCinema = async (cinema_id) => {
    const response = await axios.get(`${screeningServiceUrl}/schedules/${cinema_id}`);

    const moviesPlayingInCinema = response.data.map(({movie_id}) => movie_id);

    return moviesPlayingInCinema;
};

module.exports = { getMoviesForCinema };