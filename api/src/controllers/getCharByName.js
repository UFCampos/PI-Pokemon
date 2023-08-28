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
async function getCharByName(req) {
    const reqName = req.query.name.toLowerCase();

    // Try to find the character in the local database
    const pokemonDB = await Pokemon.findOne({
        where: {
            name: { [Op.iLike]: `%${reqName}%` }
        },
        include: ['types']
    });

    if (!pokemonDB) {
        try {
            // Fetch character information from the external API
            const data = await fetchPokemonData(reqName);
            
            // Extract relevant data from the API response
            const { name, id, is_default, sprites, species, gender, forms, abilities, location_area_encounters, game_indices, moves, height, weight } = data;

            // Create a character object
            const pokemon = {
                name,
                id,
                is_default,
                sprites,
                species,
                gender,
                forms,
                abilities,
                location_area_encounters,
                game_indices,
                moves,
                weight,
                height
            };

            return pokemon;
        } catch (err) {
            throw new Error('No existe un pokemon con ese nombre');
        }
    }

    return pokemonDB;
}

module.exports = getCharByName;
