const axios = require('axios');

const {URL} = require('../utils/api_urls');

async function getCharById(req) {

    //Request to API
    const { data } = await axios(`${URL}/${req.params.id}`);

    //If the pokemon exists, save it to an object and return it 
    if (data.name) {
        const { name, id, is_default, sprites, species, gender, forms, abilities, location_area_encounters, game_indices, moves, height, weight,} = data;
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
            height,
            weight
        };
        return pokemon
    } else {
        const pokemonDB = await Pokemon.findAll({
            where: {
                id: req.params.id
            }
        })
        if (pokemonDB.length === 0) {
            throw new Error('Pokemon not found');
        }
        return pokemonDB
       }
}


module.exports = getCharById
