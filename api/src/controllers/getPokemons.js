const axios = require('axios');

const {URL} = require('../utils/api_urls');

const getPokemons = async () => {
    const { data } = await axios(`${URL}`);
    return data;
}

module.exports = getPokemons