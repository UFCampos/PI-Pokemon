const axios = require('axios');
const { URL } = require('../../utils/api_urls');

const getApi = async () => {
    const { data } = await axios(URL);

    // Use Promise.all to concurrently fetch data for each Pokémon
    const responses = await Promise.all(
        data.results.map((pokemon) => axios(pokemon.url))
    );

    // Map the responses to the desired format
    const pokemonData = responses.map((response) => {
        const { name, id, stats, sprites, types, gender, height, weight } = response.data;
        const allTypes = types.map((type) => ({ name: type.type.name }));
        const img = sprites.other.dream_world.front_default || sprites.front_default;

        return {
            name,
            id,
            img,
            height,
            weight,
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            speed: stats[5].base_stat,
            types: allTypes,
            gender,
        };
    });

    if (pokemonData[0].name) {
        return pokemonData;
    }

    throw new Error('No hay pokemons en la API');
};

module.exports = getApi;
