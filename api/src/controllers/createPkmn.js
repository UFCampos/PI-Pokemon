const { Pokemon} = require('../db.js');
const addPokemonTypes = require('../helpers/addType.js');


async function createPkmn(name, image, hp, attack, defense, speed, height, weight, types) {

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

    return pokemon.name;
}

module.exports = createPkmn;
