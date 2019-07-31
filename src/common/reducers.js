const initialState = {
    showSuccessModal: false,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SHOW_SUCCESS_MODAL':
            return {...state, showSuccessModal: action.payload}
        default:
            return state
    }
}