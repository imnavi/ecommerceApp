const initialState = {
    // title: null,
    // price: null,
    // description: null,
    // image: null,
    // selectedItemObj: {}
}

export const selectedItemReducer = (state=initialState, action) => {

    switch(action.type){
        case 'SELECT_ITEM': 
            return {
                ...state,
                // title: payload.title,
                // price: payload.price,
                // description: payload.description,
                // image: payload.image
                ...action.payload
           }
        default: break
    }  
    return state 
}