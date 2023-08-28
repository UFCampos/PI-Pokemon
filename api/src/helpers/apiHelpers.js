const axios = require('axios');
const { URL } = require('../utils/api_urls');

async function fetchPokemonData(req) {
    const { data } = await axios(`${URL}/${req}`);
    return data;
}

module.exports = {
    fetchPokemonData
};
