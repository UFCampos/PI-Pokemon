const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { fetchPokemonData } = require('../helpers/apiHelpers');

/**
 * Get character information by ID.
 * If a numeric ID is provided, fetches from external API.
 * If a non-numeric ID is provided, fetches from the local database.
 * @param {string|number} reqId - The ID of the character to retrieve.
 * @returns {Promise<Object>} - The character information.
 */
async function getCharById(reqId) {
    // Check if the provided ID is numeric
    if (isNaN(reqId)) {
        //Fetch character information from the local database
        const pokemon = await Pokemon.findOne({
            where: {
                id: reqId
            },
            include: [{
                model: Type,
                as: 'types',
                through: {
                    attributes: []
                }}
            ]
        });
        if (!pokemon) {
            throw new Error('No existe un pokemon con ese id');
        }
        return pokemon;
    }

    
    // Fetch character information from the external API
    const data = await fetchPokemonData(reqId);
    
    if (data.name) {
        // Extract relevant data from the API response
        const { name, id, sprites, gender, height, weight, types, stats } = data;
        const allTypes = types.map((type) => ({ name: type.type.name }));
        const image = sprites.other.dream_world.front_default || sprites.front_default;

        // Create a character object
        const pokemon = {
            name,
            id,
            image: image,
            height,
            weight,
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            speed: stats[5].base_stat,
            types: allTypes,
            gender,
        };
    
        return pokemon;
    }

    throw new Error('No existe un pokemon con ese id');
}

module.exports = getCharById;
