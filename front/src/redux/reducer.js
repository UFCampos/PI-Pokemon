const initialState = {
    allPokes: [],
    isModalOpen: false,
    modalContent: []
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
            }
        default:
            return {...state}
    }
}

export default reducer