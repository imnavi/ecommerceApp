import { element } from 'prop-types'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../Components/Button'
import './cart.scss'

const Cart = () => {
    const products = useSelector((state) => state.products)
    const cartItems = useSelector(state => state.cart)

    useEffect(() => {
    }, [])

    const calculateTotal = () => {
        let total = 0
        cartItems.forEach(element => {
            total = total + (element.price * element.count)
        })
        return total
    }


    const noItemMessage = cartItems.length === 0 ? 'No items in cart' : ''

    return (
        <div className='cartWrapper'>
            {noItemMessage}
            <div className='cartList'>
                {cartItems.map(item => {
                    return (
                        <div className='item-card'>
                            <div className='image-wrapper'>
                                <img src={item.image} className='image' />
                            </div>
                            <div className='detailsWrapper'>
                                <div>{item.title}</div>
                                <div>Price: ${item.price}</div>
                                <div>Quantity: {item.count}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='orderSummary'>
                {`Total price: $${calculateTotal()}`}
                <Button
                    buttonText='Proceed to payement'
                    onClick={() => { }}
                />
            </div>

        </div>
    )
}

export default Cart