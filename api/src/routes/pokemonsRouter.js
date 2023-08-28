const { Router } = require('express');
const createPkmn = require('../controllers/createPkmn');
const getPokemons = require('../controllers/getPokemons');
const getCharById = require('../controllers/getCharById');
const getCharByName = require('../controllers/getCharByName');

const pokemonsRouter = Router();

// Get all pokemons or a specific one by name
pokemonsRouter.get('/', async (req, res) => {
    try {
        if (req.query.name) {
            const pokemon = await getCharByName(req);
            return res.status(200).json(pokemon);
        }
        const pokemons = await getPokemons();
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).send(error.message); // Use 500 for internal server errors
    }
});

// Create a new pokemon
pokemonsRouter.post('/', async (req, res) => {
    try {
        await createPkmn(req);
        res.status(201).json({ message: 'The new pokemon has been created successfully' });
    } catch (error) {
        res.status(400).send(error.message); // Use 400 for bad requests
    }
});

// Get a specific pokemon by ID
pokemonsRouter.get('/:id', async (req, res) => {
    try {
        const pokemon = await getCharById(req.params.id);
        // if (!pokemon) {
        //     return res.status(404).json({ message: 'Pokemon not found' });
        // }
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).send(error.message); // Use 500 for internal server errors
    }
});

module.exports = pokemonsRouter;