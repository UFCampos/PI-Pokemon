const { Pokemon, Type } = require('../db.js');

async function addPokemonTypes(pokemon, types) {
    if (types) {
        for (const pktype of types) {
            const [newType] = await Type.findOrCreate({
                where: {
                    name: pktype
                },
                defaults: {
                    name: pktype
                }
            });
            await pokemon.addType(newType);
        }
    }
}

module.exports = addPokemonTypes