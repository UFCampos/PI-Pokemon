const createPokemon = require('../controllers/createPokemon');
const getPokemons = require('../controllers/getPokemons');
const getCharById = require('../controllers/getCharById');
const getCharByName = require('../controllers/getCharByName');


const postPokemon = async (req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, height, weight, types, owner } = req.body;
        const pokemon = await createPokemon(name, image, hp, attack, defense, speed, height, weight, types, owner);
        res.status(201).json({ message: `New pokemon ${pokemon.name} (id: ${pokemon.id}) created successfully` });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getAllPokemons = async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const pokemon = await getCharByName(name);
            if (!pokemon.name) {
                throw new Error('No existe un pokemon con ese nombre');
            }
            res.status(200).json(pokemon);
        } else {
            const pokemons = await getPokemons();
            res.status(200).json(pokemons);
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
}

const getPokemonById = async (req, res) => {
    const { id } = req.params;
    try {
        const pokemon = await getCharById(id);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(404).send(error.message); // Use 404 for not found
    }
}

const deletePokemonById = async (req, res) => {
    const { id } = req.params;
    try {
        const pokemon = await getCharById(id);
        const delPokemon = await pokemon.destroy();
        res.status(200).json({ message: `Pokemon ${pokemon.name} deleted successfully` });
    } catch (error) {
        res.status(404).send(error.message); // Use 404 for not found
    }
}

const updatePokemonById = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const pokemon = await getCharById(id);
        const updatePokemon = await pokemon.update(newData);
        res.status(200).json({ message: `Pokemon ${pokemon.name} updated successfully` });
    } catch (error) {
        res.status(404).send(error.message); // Use 404 for not found
    }
}

module.exports ={
    postPokemon,
    getAllPokemons,
    getPokemonById,
    deletePokemonById,
    updatePokemonById
}