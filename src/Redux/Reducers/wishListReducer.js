const initialState = []

export const wishListReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TO_WISHLIST':
            return  [...state, action.payload]
        case 'REMOVE_FROM_WISHLIST':
            state.splice(state.findIndex(item => item.id === action.payload.id), 1)
        default: break
    }
    return state
}