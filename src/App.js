import { useContext, useState, useEffect} from "react";
import './App.css';
import Footer from './components/Footer/Footer';
/* import GraphicsCard from './components/GraphicsCard/GraphicsCard'; */
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import './grid.css'
import Product from './components/Products/Products';
import BottomBar from './components/BottomBar/BottomBar';
import {close, show} from'./components/Products/ProductData.js'
import Context from "./store/CartStore/Context";
import Cart from "./components/Cart/Cart";
function App() {
  const [state] = useContext(Context)
    return (
      <>
        <Header/>
        <div className='container'>
            <Routes>
              <Route exact path='/' element = {<Home/>}/>
              <Route path='/Products' element = {<Product /* onClick ={handlCartItem} *//>}/>
              <Route path='/Cart' element = {<Cart/>}/>
            </Routes>
            <div id='cart_btn' onClick={show}>
              <div className='cart__btn__item'>
                <span>{state.listLength}</span>
                <div className='cart__btn__title'>
                  <span > Xem giỏ hàng</span>
                </div>          
                <i className="fas fa-shopping-cart"></i>
              </div>     
            </div>    
        </div>
        <Footer/>
        <BottomBar
          className = 'cart__bar'
          title = 'Giỏ hàng của bạn'
          onClick = {close}
        />
      </>
    );
}

export default App;
