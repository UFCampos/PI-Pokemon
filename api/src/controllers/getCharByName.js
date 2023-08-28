const axios = require('axios');
const { Pokemon, Type } = require('../../src/db.js');
const {Op} = require('sequelize');

const {URL} = require('../utils/api_urls');

const getCharByName = async (req) => {
    const nameToLowerCase = req.query.name.toLowerCase()

    const pokemonDB = await Pokemon.findAll({
        where: {
            name: {[Op.iLike]: `%${nameToLowerCase}%`}  
        },
        include: [{
            model: Type,
            through: { attributes: [] },
            as: 'types'
        }]
    })
    if (pokemonDB.length === 0) {
        const { data } = await axios(`${URL}/${nameToLowerCase}`);
        const { name, id, is_default, sprites, species, gender, forms, abilities, location_area_encounters, game_indices, moves, height, weight, } = data;
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
    }
    return pokemonDB
}

module.exports = getCharByName  