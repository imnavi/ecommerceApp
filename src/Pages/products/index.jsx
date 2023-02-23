import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from '../../Components/Cards'
import './products.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectedItemActions } from '../../Redux/Actions/selectedItemActions'
import { addToCartAction, removeFromCartAction } from '../../Redux/Actions/cartActions'
import { addToWishListAction, removeFromWishListAction } from '../../Redux/Actions/wishListReducerActions'
import { CheckItemStatus } from '../../utlility'
import { Loader } from '../../Components/Icons/loader'


const Products = () => {
    const [listedProducts, setListedProducts] = useState([])

    const products = useSelector(state => state.products)
    const searchText = useSelector(state => state.search)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(searchText !== '') {
            console.log('searchTextL ', searchText)
            setListedProducts(() => products.filter(product => product.title.toLowerCase().trim().includes(searchText.toLowerCase().trim())))
        }
        else{
            console.log([...products])
             setListedProducts([...products]) 
        }

    }, [searchText, products])

    const openItem = (product) => {
        if(product){
            dispatch(selectedItemActions(product))
            navigate(`/products/${product.id}`)
        }
    }

    const adToWishList = (e, product) => {
        e.stopPropagation()
        const itemStatus = CheckItemStatus(product.id)

        if(itemStatus.wishList) { 
            dispatch(addToWishListAction(product))
        }
        else{
            dispatch(removeFromWishListAction(product))
        }
    }

    const addToCart = (e, product) => {
        e.stopPropagation()

        const itemStatus = CheckItemStatus(product.id)

        if(itemStatus.cart) { 
            dispatch(addToCartAction(product))
        }
        else{
            dispatch(removeFromCartAction(product))
        }
    }

    return (
        <div className='home-page-wrapper'>
            <div className='available-products'>
                {listedProducts.map((product) => {
                    return <Cards 
                    id={product.id}
                    imgSrc={product.image} 
                    price={product.price} 
                    onAddToWishList ={(e) => adToWishList(e,product)}
                    onAddToCart = {(e) => addToCart(e,product)}
                    onClickCard={() => openItem(product)}
                    title={product.title}
                    />
                })}
            </div>
        </div>
    )
}

export default Products