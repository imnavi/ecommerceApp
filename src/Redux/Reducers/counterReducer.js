const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    // console.log(state, action)
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                count: action.payload
            }
        default: break
    }
    return state
}
