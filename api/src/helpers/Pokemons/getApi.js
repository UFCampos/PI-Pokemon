const axios = require('axios');
const { URL } = require('../../utils/api_urls');

const getApi = async () => {
    const { data } = await axios(URL);

    const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
            const { data } = await axios(pokemon.url);
            const { name, id, stats, sprites, types, gender, height, weight } = data;
            const allTypes = types.map((type) => ({ name: type.type.name }));
            const img = sprites.other.dream_world.front_default || sprites.front_default;

            return {
                name,
                id,
                image: img,
                height,
                weight,
                hp: stats[0].base_stat,
                attack: stats[1].base_stat,
                defense: stats[2].base_stat,
                speed: stats[5].base_stat,
                types: allTypes,
                gender,
            };
        })
    );

    if (pokemonData.length > 0) {
        return pokemonData;
    }

    throw new Error('No hay pokemons en la API');
};

module.exports = getApi;
