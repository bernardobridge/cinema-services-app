const axios = require('axios');

const getMoviesForCinema = async (cinema_id) => {
    const response = await axios.get(`${process.env.SCREENINGS_SERVICE_URL}/schedules/${cinema_id}`);

    const moviesPlayingInCinema = response.data.map(({movie_id}) => movie_id);

    return moviesPlayingInCinema;
};

module.exports = { getMoviesForCinema };