import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { setProduct } from '../../Redux/Actions/productActions'
import { searchAction } from '../../Redux/Actions/searchActions'
import Button from '../Button'
import { HamBurger } from '../Icons/hamburger'
import Input from '../Input'
import PopUp from '../PopUp'
import './header.scss'

const Header = () => {
    const [search, setSearch] = useState("")
    const [showMenuLinks, setShowMenuLinks] = useState(false)

    const dispatch = useDispatch()
    let debounceTimer = null

    const handleChange = (e) => {

        console.log(e.target.value)
        setSearch(e?.target?.value)

        clearInterval(debounceTimer)
        debounceTimer = setTimeout(() => {
            dispatch(searchAction(e?.target.value))
        }, 1000)
    }

    const renderWishListItem = () => {
        return (
            <PopUp>
                <p>wishlist items</p>
            </PopUp>)
    }

    const showMenuDetails = () => {
        setShowMenuLinks(!showMenuLinks)
    }

    return (
        <header className='header'>
            <div className='header-left'>
                <Link to='/products' className="navItems logoLink">ECA</Link>
            </div>
            <div className='header__search-field'>
                <Input
                    type='text'
                    placeholder='Search here...'
                    onChange={handleChange}
                    value={search}
                />
            </div>
            <div className='header-right'>
                {/* <Button 
                buttonText="Products" 
                onClick={navigateToProducts}
                className="products productLink"
            /> */}
                <Link to='/products' className="navItems productLink">Products</Link>
                {/* <span className='navItems wishListLink' onClick={renderWishListItem}>Wish list</span> */}
                <Link to='/cart' className='navItems cart'>Cart</Link>
            </div>
            <div className='hamburgerMenu' onClick={showMenuDetails}>
                <HamBurger />
                {showMenuLinks && (
                    <div className='menuLinks'>
                        <Link to='/products' className="navItems productLink">Products</Link>
                        <Link to='/cart' className='navItems cart'>Cart</Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header