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
        const { name, id, is_default, sprites, species, gender, forms, height, weight } = data;
    
        // Create a character object
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
        };
    
        return pokemon;
    }

    throw new Error('No existe un pokemon con ese id');
}

module.exports = getCharById;
