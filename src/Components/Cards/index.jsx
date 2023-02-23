import React from 'react'
import propTypes from 'prop-types'
import './cards.scss'
import Button from '../Button'
import { CheckItemStatus } from '../../utlility'

const Cards = (props) => {

    // const itemStatus = CheckItemStatus(props.id)
    // const wishListButtonText = itemStatus.wishList ? 'Remove from Wishlist': 'Add to wishlist'
    // const cartButtonText = itemStatus.cart ? 'Remove from cart': 'Add to cart'
    // console.log('rendering card')
  return (
    <div className={`cards-wrapper ${props.className}`} onClick={props.onClickCard}>
        <div className='image-wrapper'>
            <img src={props.imgSrc} className='image'/>
        </div>
        <div className='card-title'>
            <label className='title'>{props.title}</label>
        </div>
        <div className='card-details'>
            {/* <Button buttonText={wishListButtonText} className="add-to-wishlist" variant="secondary" onClick={props.onAddToWishList}/> */}
             <label className='price-tag'>${props.price}</label>
            {/* <Button buttonText={cartButtonText}  className="add-to-cart" variant="primary" onClick={props.onAddToCart}/> */}
        </div>
    </div>
  )
}

Cards.defaultProps = {
    className: '',
    imgSrc: '',
    title: ''
}   

export default Cards