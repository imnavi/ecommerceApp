const initialState = ""

export const searchReducer = (state=initialState, action) => {

    switch(action.type){
        case 'SET_SEARCH': state = action.payload
        default: break
    }  
    return state 
}