import { 
  STORE_POKES, 
  OPEN_MODAL, 
  CLOSE_MODAL, 
  MODAL_CONTENT, 
  FETCH_TYPES, 
  FILTER_BY_TYPE, 
  PAGED_POKEMONS, 
  SET_CURRENT_PAGE, 
  SORT_BY_NAME,
  SORT_BY_ATTACK,
  POKEMON_BY_STORAGE } from './action-types'

const initialState = {
    allPokes: [],
    isModalOpen: false,
    modalContent: [],
    allTypes: [],
    pokemonByStorage: [],
    filteredPokemons: [],
    pagedPokemons: [],
    currentPage: 1
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORE_POKES:
      return {
        ...state,
        allPokes: payload,
        pokemonByStorage: payload,
        filteredPokemons: payload
      };

    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };

    case MODAL_CONTENT:
      return {
        ...state,
        modalContent: payload
      };

    case POKEMON_BY_STORAGE:
      let pokemonStorage = [...state.allPokes];
      if (payload === 'api') {
        pokemonStorage = pokemonStorage.filter(pokemon => !isNaN(pokemon.id));
      } else if (payload === 'db') {
        pokemonStorage = pokemonStorage.filter(pokemon => isNaN(pokemon.id));
      }
      return {
        ...state,
        pokemonByStorage: pokemonStorage,
        filteredPokemons: pokemonStorage
      };

    case FETCH_TYPES:
      return {
        ...state,
        allTypes: payload
      };

    case FILTER_BY_TYPE:
      const newFilteredPokemons = state.pokemonByStorage.filter(pokemon => {
        if (payload === 'all') {
          return pokemon;
        }
        return pokemon.types.some(type => type.name === payload);
      });
      return {
        ...state,
        filteredPokemons: newFilteredPokemons
      };

    case SORT_BY_NAME:
      let filteredPokemonsCopy = [...state.filteredPokemons];
      filteredPokemonsCopy.sort((a, b) => a.name.localeCompare(b.name));
      if (payload === 'desc') {
        filteredPokemonsCopy.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filteredPokemons: filteredPokemonsCopy,
      };

    case SORT_BY_ATTACK:  
      let filteredPokemonsCopyAttack = [...state.filteredPokemons];
      filteredPokemonsCopyAttack.sort((a, b) => a.attack - b.attack);
      if (payload === 'atk_desc') {
        filteredPokemonsCopyAttack.sort((a, b) => b.attack - a.attack);
      }
      return {
        ...state,
        filteredPokemons: filteredPokemonsCopyAttack
      }

    case PAGED_POKEMONS:
      return {
        ...state,
        pagedPokemons: [...payload]
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload
      };

    default:
      return { ...state };
  }
};

export default reducer