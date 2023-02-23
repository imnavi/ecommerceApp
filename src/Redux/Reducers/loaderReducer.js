const initialState = false

export const loaderReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_LOADER': state=action.payload
                            break
        default: return state
    }
    return state
    
}