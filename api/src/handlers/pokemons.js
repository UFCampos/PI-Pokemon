const createPkmn = require('../controllers/createPkmn');
const getPokemons = require('../controllers/getPokemons');
const getCharById = require('../controllers/getCharById');
const getCharByName = require('../controllers/getCharByName');


const postPokemon = async (req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;
        const pokemon = await createPkmn(name, image, hp, attack, defense, speed, height, weight, types);
        console.log(pokemon);
        res.status(201).json({ message: `The new pokemon ${pokemon} has been created successfully` });
    } catch (error) {
        res.status(400).send(error.message); // Use 400 for bad requests
    }
};

const getAllPokemons = async (req, res) => {
    try {
        const name = req.query.name;
        if (name) {
            const pokemon = await getCharByName(name);
            if(!pokemon.name){
                throw new Error('No existe un pokemon con ese nombre');
            }
            return res.status(200).json(pokemon);
        }
        const pokemons = await getPokemons();
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(404).send(error.message); // Use 404 for not found
    }
}

const getPokemonById = async (req, res) => {
    const { id } = req.params;
    try {
        const pokemon = await getCharById(id);
        // if (!pokemon) {
        // res.status(404).json({ message: `No existe un pokemon con el id ${id}` });
        // }
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(404).send(error.message); // Use 404 for not found
    }
}

module.exports ={
    postPokemon,
    getAllPokemons,
    getPokemonById
}