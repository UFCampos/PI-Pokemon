const initialState = {
    allPokes: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'STORE_POKES':
            return {
                ...state,
                allPokes: payload
            }
        default:
            return {...state}
    }
}

export default reducer