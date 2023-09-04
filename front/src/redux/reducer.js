import { STORE_POKES, OPEN_MODAL, CLOSE_MODAL, MODAL_CONTENT, FETCH_TYPES, FILTER_BY_TYPE, PAGED_POKEMONS, SET_CURRENT_PAGE, SORT_BY_NAME } from './action-types'

const initialState = {
    allPokes: [],
    isModalOpen: false,
    modalContent: [],
    allTypes: [],
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
                filteredPokemons: payload
            }
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
        case FETCH_TYPES:
            return {
                ...state,
                allTypes: payload
            };
        case FILTER_BY_TYPE:
            const newFilteredPokemons = state.allPokes.filter(pokemon => {
                for (const type of pokemon.types) {
                    if (type.name === payload || payload === 'all') {
                        return pokemon
                    }
                }
            });
            return {
                ...state,
                filteredPokemons: newFilteredPokemons
            }
        case SORT_BY_NAME:
            const filteredPokemonsCopy = [...state.filteredPokemons]
            console.log(filteredPokemonsCopy);

            filteredPokemonsCopy.sort((a, b) => a.name.localeCompare(b.name))
            if (payload === 'desc') {
                filteredPokemonsCopy.reverse()
            }

            return {
                ...state,
                filteredPokemons: filteredPokemonsCopy,
            }
        case PAGED_POKEMONS:
            return {
                ...state,
                pagedPokemons: [...payload]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            }
        default:
            return {...state}
    }
}

export default reducer