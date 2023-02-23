const initialState = []

export const productReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_PRODUCT': return [...action.payload]
        case 'FIND_PRODUCT': state.find(element => element.id === action.payload.id) 
        case 'SEARCH_PRODUCT': state.includes(element => element.title === action.payload.searchText) 
        default: break
    }
    return state
}