const {Pokemon, Type} = require('../../db');   

const getDB = async () => {
    const pokemons = await Pokemon.findAll({
        include: [{
            model: Type,
            as: 'types',
            through: {
                attributes: []
            }
        }]
    });
    return pokemons;
}

module.exports = getDB