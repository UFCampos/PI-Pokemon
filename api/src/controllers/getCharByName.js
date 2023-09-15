const axios = require('axios');
const { Pokemon, Type } = require('../../src/db.js');
const { Op } = require('sequelize');
const { fetchPokemonData } = require('../helpers/apiHelpers.js');

/**
 * Get character information by name (case-insensitive).
 * Tries to fetch from the local database first, then falls back to the external API.
 * @param {Object} req - The request object containing the query parameter "name".
 * @returns {Promise<Object>} - The character information.
 */
async function getCharByName(reqName) {
    const reqNameLowCase = reqName.toLowerCase();

    // Try to find the character in the local database
    const pokemonDB = await Pokemon.findOne({
        where: {
            name: { [Op.iLike]: `%${reqNameLowCase}%` }
        },
        include: [{ model: Type, as: 'types', through: { attributes: [] } }]
    });

    // If pokemonDB is an empty object, try to fetch from the external API
    if (!pokemonDB) {
        // Fetch character information from the external API
        const data = await fetchPokemonData(reqNameLowCase);

        // Extract relevant data from the API response
        const { name, id, sprites, height, weight, stats, types, gender } = data;
        const img = sprites.other.dream_world.front_default || sprites.front_default;
        const allTypes = types.map((type) => ({ name: type.type.name }));

        // Create a character object
        const pokemon = {
            name,
            id,
            image: img,
            height,
            weight,
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            speed: stats[5].base_stat,
            types: allTypes,
            gender,
        };

        return pokemon

    }

    return pokemonDB;
}

module.exports = getCharByName;
