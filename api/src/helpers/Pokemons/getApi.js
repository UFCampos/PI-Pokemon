const axios = require('axios');
const {URL} = require('../../utils/api_urls');

const getApi = async () => {
    
    const { data } = await axios(URL);
    const responses = await Promise.all(
        data.results.map((pokemon) => axios(pokemon.url))
    );

    //Fetch data for each response 
    const pokemonData = responses.map((response) => {
     let { name, id, stats, sprites, types, gender, height, weight} = response.data;


     //Map each type to its name
     let allTypes = types.map((type) => ({ name: type.type.name }));

    //Get appropiate image
     let img = sprites.other.dream_world.front_default ? sprites.other.dream_world.front_default : sprites.front_default;

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
         gender 
     }
        }
    );

    if(pokemonData[0].name){
        return pokemonData;
    }
     
}

module.exports = getApi