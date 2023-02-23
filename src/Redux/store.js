import { createStore, combineReducers } from 'redux'
import {counterReducer } from './Reducers/counterReducer'
import { productReducer } from './Reducers/productReducer';
import { selectedItemReducer } from './Reducers/selectedItemReducer';
import { wishListReducer } from './Reducers/wishListReducer';
import { cartReducer } from './Reducers/cartReducer';
import { searchReducer } from './Reducers/searchReducer';
import { loaderReducer } from './Reducers/loaderReducer';

const rootReducers = combineReducers({
    counter: counterReducer,
    selected: selectedItemReducer,
    products: productReducer,
    wishList: wishListReducer,
    cart: cartReducer,
    search: searchReducer,
    loader: loaderReducer
})

const initialState = window.__PRELOADED_STATE__;

const store = createStore(
    rootReducers,
    // selectedItemReducer,
    // initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
// console.log('store', store.getState())
export default store

