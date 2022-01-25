import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../auth';
import Guest from '../guest';
import { Detail, Home, Products, Layout, Checkout, Login, Success, Register, Search, Notfound } from '../pages';

const Routers = () => {
    return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Notfound/>} />
                <Route path='/' element={<Layout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/products' element={<Products/>}/>
                  <Route path='/products/detail/:id' element={<Detail/>}/>
                  <Route path='/products/search/:keyword' element={<Search/>}/>
                  <Route path='/products/checkout' element={<Auth><Checkout/></Auth>}/>
                </Route>
                <Route path='/login' element={<Guest><Login/></Guest>}/>
                <Route path='/register' element={<Guest><Register/></Guest>}/>
                <Route path='/success/:id' element={<Success/>} />
            </Routes>
        </BrowserRouter>
      </>
    )
}

export default Routers