const { Pokemon} = require('../db.js');
const addPokemonTypes = require('../helpers/Types/addType.js');


async function createPokemon(name, image, hp, attack, defense, speed, height, weight, types, owner) {

    const pokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        image,
    });

    height && (await pokemon.update({ height }));
    weight && (await pokemon.update({ weight }));
    speed && (await pokemon.update({ speed }));
    owner && (await pokemon.update({ owner }));

    await addPokemonTypes(pokemon, types);

    return pokemon;
}

module.exports = createPokemon;
