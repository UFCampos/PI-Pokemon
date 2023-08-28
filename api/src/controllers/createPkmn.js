const { Pokemon} = require('../db.js');
const addPokemonTypes = require('../helpers/addType.js');

async function createPkmn(req) {
    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;

    try {
        const pokemon = await Pokemon.create({
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
        });

        await addPokemonTypes(pokemon, types);

        return pokemon;
    } catch (error) {
        throw new Error('Error creating Pokemon: ' + error.message);
    }
}

module.exports = createPkmn;
