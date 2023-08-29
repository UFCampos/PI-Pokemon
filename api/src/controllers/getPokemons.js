const axios = require('axios');
const getApi = require('../helpers/Pokemons/getApi');
const getDB = require('../helpers/Pokemons/getDB');

const {URL} = require('../utils/api_urls');

const getPokemons = async () => {
    const pokemons = await getApi();
    const pokemonsDB = await getDB();
    return [...pokemons, ...pokemonsDB];
}

module.exports = getPokemons