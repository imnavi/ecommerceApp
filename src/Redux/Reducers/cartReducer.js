import { element } from "prop-types"

const initialState = []

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
            break
        case 'REMOVE_FROM_CART':
            console.log(state, action)
            return state.filter(element => element.id !== action.payload)
            break
        default: break
    }
    return state
}
