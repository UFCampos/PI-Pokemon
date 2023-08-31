const axios = require('axios');
const { URL_NAME_OR_ID } = require('../utils/api_urls');

async function fetchPokemonData(id) {
    const { data } = await axios(`${URL_NAME_OR_ID}/${id}`);
    if (data.name) {
        console.log(data);
        return data
    }
    throw new Error('No se pudo encontrar el pokemon solicitado');
}

module.exports = {
    fetchPokemonData
};
