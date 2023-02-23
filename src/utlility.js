import React from 'react'
import { useSelector } from 'react-redux'
// import { addToWishListAction, removeFromWishListAction } from '../../Redux/Actions/wishListReducerActions'
// import {  addToCartAction, removeFromCartAction } from '../../Redux/Actions/cartActions'

export const CheckItemStatus = (productId) => {
    console.log('inside utility')
    const products = useSelector(state => state.products)
    const wishListItem = useSelector(state => state.wishList)
    const cartItems = useSelector(state => state.cart)

    let status = {
        wishList: false,
        cart: false
    }
    const wishLisstStatus = wishListItem.some(element => element.id === productId)
    const cartStatus = cartItems.some(element => element.id === productId)
    if(wishLisstStatus){ status.wishList = true }
    if(cartStatus) { status.cart = true }

    return status
}