const axios = require('axios');
const {Pokemon} = require('../db');

const {URL} = require('../utils/api_urls');

async function getCharById(reqId) {
    if (isNaN(reqId)){
        const pokemonDB = await Pokemon.findByPk(reqId);
        return pokemonDB
    }

    const {data} = await axios(`${URL}/${reqId}`);

    const { name, id, is_default, sprites, species, gender, forms, height, weight } = data;
    const pokemon = {
        name,
        id,
        is_default,
        sprites,
        species,
        gender,
        forms,
        height,
        weight
    }

    return pokemon;
}


module.exports = getCharById
