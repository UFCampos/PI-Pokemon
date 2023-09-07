const { Router } = require('express');

//require handlers
const {postPokemon, getAllPokemons, getPokemonById, deletePokemonById, updatePokemonById } = require('../handlers/pokemons');

const pokemonsRouter = Router();

// Get all pokemons or a specific one by name
pokemonsRouter.get('/', getAllPokemons);

// Create a new pokemon
pokemonsRouter.post('/', postPokemon);

// Get a specific pokemon by ID
pokemonsRouter.get('/:id', getPokemonById);

//Delete a pokemon by ID
pokemonsRouter.delete('/:id', deletePokemonById);

//Update a pokemon by ID
pokemonsRouter.put('/:id', updatePokemonById);

module.exports = pokemonsRouter;
