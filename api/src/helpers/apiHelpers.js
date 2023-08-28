const axios = require('axios');
const { URL_NAME_OR_ID } = require('../utils/api_urls');

async function fetchPokemonData(req) {
    const { data } = await axios(`${URL_NAME_OR_ID}/${req}`);
    return data;
}

module.exports = {
    fetchPokemonData
};
