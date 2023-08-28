const {Pokemon, Type} = require('../db.js');

const createPkmn = async (req) => {
    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;
    const pokemon = await Pokemon.create({
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
    })

    //types is an array of strings, I need to add each type to the pokemon
    if(types) types.forEach(async pktype => {
        const newType = await Type.findOrCreate({
            where: {
                name: pktype
            },
            defaults: {
                name: pktype
            }
        })
        pokemon.addType(newType[0])
    });
}

module.exports = createPkmn