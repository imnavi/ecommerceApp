import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route,  Navigate} from 'react-router-dom'
import './App.css';
import Products from './Pages/products';
import SelectedItem from './Pages/selectedItem';
import Header from './Components/Header'
import { setProduct } from './Redux/Actions/productActions';
import { loaderAction } from './Redux/Actions/loaderAction';
import Cart from './Pages/cart';
import { Loader } from './Components/Icons/loader';

const App = () =>  {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.loader)

  useEffect(() => {
    callDataApi()
  }, [])

  const callDataApi = () => {
    dispatch(loaderAction(true))
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProduct(data))
        dispatch(loaderAction(false))
      }).catch(error => dispatch(loaderAction(false)))
  }

  return (
    <div className="App">
      {isLoading && <Loader/>}
      <Header />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={ <SelectedItem />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='*' element={<Navigate to='/products' replace/>}/>
        </Routes>
    </div>
  );
}

export default App;
