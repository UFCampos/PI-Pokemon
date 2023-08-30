const { Pokemon} = require('../db.js');
const addPokemonTypes = require('../helpers/addType.js');


async function createPkmn(name, image, hp, attack, defense, speed, height, weight, types) {

    const pokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
    });

    image && (await pokemon.update({ image }));
    height && (await pokemon.update({ height }));
    weight && (await pokemon.update({ weight }));
    speed && (await pokemon.update({ speed }));

    await addPokemonTypes(pokemon, types);

}

module.exports = createPkmn;
