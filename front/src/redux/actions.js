import axios from 'axios';
import { STORE_POKES, OPEN_MODAL, CLOSE_MODAL, MODAL_CONTENT, FETCH_TYPES, FILTER_BY_TYPE, PAGED_POKEMONS, SET_CURRENT_PAGE, SORT_BY_NAME } from './action-types'

export const storePokes = () => {
   return async (dispatch) => {
      const endpoint = 'http://localhost:3001/pokemons';
      const response = await axios(endpoint);
      return dispatch({
         type: STORE_POKES,
         payload: response.data
      })
   };
};

export const openModal = () => ({
   type: OPEN_MODAL,
 });
 
 export const closeModal = () => ({
   type: CLOSE_MODAL,
 });

 export const fetchContent = (query) => {
   return async (dispatch) => {
      //regex to check for all numbers and A-Z
      const check = /^[a-zA-Z0-9]+$/;
      if (!check.test(query)) {
         return dispatch ({
            type: MODAL_CONTENT,
            payload: {} 
         })
      }
      const endpoint = `http://localhost:3001/pokemons?name=${query}`;
      const response = await axios(endpoint);
      return dispatch({
         type: MODAL_CONTENT,
         payload: response.data
      });
   };
}

export const filterByType = (type) => {
   return (dispatch) => {
      dispatch({
         type: FILTER_BY_TYPE,
         payload: type
      });
   }
}

export const fetchTypes = () => {
   return async (dispatch) => {
      const endpoint = 'http://localhost:3001/types';
      const response = await axios(endpoint);
      return dispatch({
         type: FETCH_TYPES,
         payload: response.data
      });
   };
}

export const pagedPokemons = (calculations) => {
   return (dispatch) => {
      dispatch({
         type: PAGED_POKEMONS,
         payload: calculations
      });
   }
}

export const setCurrentPage = (page) => {
   return (dispatch) => {
      dispatch({
         type: SET_CURRENT_PAGE,
         payload: page
      });
   }
}

export const sortByName = (order) => {
   return (dispatch) => {
      dispatch({
         type: SORT_BY_NAME,
         payload: order
      });
   }
}