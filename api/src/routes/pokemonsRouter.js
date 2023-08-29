const { Router } = require('express');

//require handlers
const {postPokemon, getAllPokemons, getPokemonById } = require('../handlers/pokemons');

const pokemonsRouter = Router();

// Get all pokemons or a specific one by name
pokemonsRouter.get('/', getAllPokemons);

// Create a new pokemon
pokemonsRouter.post('/', postPokemon);

// Get a specific pokemon by ID
pokemonsRouter.get('/:id', getPokemonById);

module.exports = pokemonsRouter;
