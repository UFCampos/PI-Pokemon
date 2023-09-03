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

export const openModal = () => ({
   type: 'OPEN_MODAL',
 });
 
 export const closeModal = () => ({
   type: 'CLOSE_MODAL',
 });

 export const fetchContent = (query) => {
   return async (dispatch) => {
      //regex to check for all numbers and A-Z
      const check = /^[a-zA-Z0-9]+$/;
      if (!check.test(query)) {
         return dispatch ({
            type: "MODAL_CONTENT",
            payload: {} 
         })
      }
      const endpoint = `http://localhost:3001/pokemons?name=${query}`;
      const response = await axios(endpoint);
      return dispatch({
         type: "MODAL_CONTENT",
         payload: response.data
      });
   };
}

export const filterByType = (type) => {
   return (dispatch) => {
      dispatch({
         type: "FILTER_BY_TYPE",
         payload: type
      });
   }
}

export const fetchTypes = () => {
   return async (dispatch) => {
      const endpoint = 'http://localhost:3001/types';
      const response = await axios(endpoint);
      return dispatch({
         type: "FETCH_TYPES",
         payload: response.data
      });
   };
}