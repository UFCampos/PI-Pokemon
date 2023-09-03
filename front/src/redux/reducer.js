const initialState = {
    allPokes: [],
    isModalOpen: false,
    modalContent: [],
    allTypes: [],
    filteredPokemons: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'STORE_POKES':
            return {
                ...state,
                allPokes: payload
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                isModalOpen: true,
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                isModalOpen: false,
            };
        case 'MODAL_CONTENT':
            return {
                ...state,
                modalContent: payload
            };
        case 'FETCH_TYPES':
            return {
                ...state,
                allTypes: payload
            };
        case 'FILTER_BY_TYPE':
            const filteredPokemons = state.allPokes.filter(pokemon => {
                for (const type of pokemon.types) {
                    if (type.name === payload) {
                        return pokemon
                    }
                }
            });
            return {
                ...state,
                filteredPokemons: filteredPokemons
            }
        default:
            return {...state}
    }
}

export default reducer