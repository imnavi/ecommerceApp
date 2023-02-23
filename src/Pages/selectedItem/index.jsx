import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from '../../Components/Button'
import './selectedItem.scss'
import { addToWishListAction, removeFromWishListAction } from '../../Redux/Actions/wishListReducerActions'
import {  addToCartAction, removeFromCartAction } from '../../Redux/Actions/cartActions'

const SelectedItem = (props) => {
  const params = useParams()
  const dispatch = useDispatch()

  const [ addToCart, setAddToCart ] = useState(false)
  const [ addToWishList, setAddToWishList ] = useState(false)
  const [ product, setProduct ] = useState({})
  const [ count, setCount ] = useState(1)

  const products = useSelector(state => state.products)
  const wishListItem = useSelector(state => state.wishList)
  const cartItems = useSelector(state => state.cart)

  const productId = Number(params?.id)
  const productObj = products.find(ele => ele.id === productId) 

  useEffect(() => {
    const wishLisstStatus = wishListItem.some(element => element.id === productId)
    const cartStatus = cartItems.some(element => element.id === productId)
    if(wishLisstStatus){ setAddToWishList(wishLisstStatus) }
    if(cartStatus) { setAddToCart(true) }
    setProduct(productObj)
    
  }, [])


  const addItemToCart = () => {
    if(!addToCart){
      dispatch(addToCartAction({...product, count: count}))
    }
    else{
      dispatch(removeFromCartAction(productId))
    }
    setAddToCart(!addToCart)
  }

  const addItemToWishList = () => {
    if(!addToWishList){
      dispatch(addToWishListAction(product))
    }
    else{
      dispatch(removeFromWishListAction(productId))
    }
    setAddToWishList(!addToWishList)
  }

  const decrementCount = () => {
    if(count - 1 >= 1){
      setCount(count - 1)
    }
  }
  const incrementCount = () => {
    setCount(count + 1)
  }

  const addToCartText = addToCart ? 'Remove from Cart' : 'Add To Cart'
  const addToWishListText = addToWishList ? 'Remove from wishlist' : 'Add To Wishlist'

  return (
    <div className='selected-item-wrapper'>
        <div className='item-image-container'>
            <img className='product-image' src={product?.image} alt={product?.title}/>
        </div> 
        <div className='item-description-container'>
            <div className='item-name'>{product?.title}</div>
            <div className='item-description'>{product?.description}</div>
            <div className='item-price'><span className='currency'>$</span>{product?.price}</div>

            <div className='item-quantity'>
                <span className='quantity-wrapper'>
                  <Button
                    onClick={decrementCount}
                    className="counter decrement"
                    buttonText='-'
                  />
                  <span className='item-count'>{count}</span>
                  <Button
                    onClick={incrementCount}
                    className="counter increment"
                    buttonText='+'
                  />
                </span>
            </div>

            <div className='item-actions'>
                <Button
                    onClick={addItemToWishList}
                    className="add-to-wishlist"
                    buttonText={addToWishListText}
                    variant="secondary"                    
                />
                <Button
                    onClick={addItemToCart}
                    className="add-to-cart"
                    buttonText={addToCartText}
                    // variant="primary"                    
                />
            </div>
        </div>
    </div>
  )
}

export default SelectedItem