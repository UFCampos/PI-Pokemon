import axios from 'axios';

export const storePokes = () => {
   return async (dispatch) => {
      const endpoint = 'http://localhost:3001/pokemons';
      const response = await axios(endpoint);
      return dispatch({
         type: "STORE_POKES",
         payload: response.data
      })
   };
};