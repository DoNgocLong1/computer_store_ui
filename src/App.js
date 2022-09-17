import { useState, useEffect, useContext} from "react";
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
import products from './data/products/products'
function App() {
  const theme = 'dark_theme'
    document.body.classList.add(theme)
  const storageCart = JSON.parse(localStorage.getItem('CART_LIST') || localStorage.setItem('CART_LIST', JSON.stringify([]))) 
    //set State cartList là 1 mảng gồm các id sản phẩm ưu thích
    const [cartList, setCartList] = useState(storageCart)
    //set State cartBar để ẩn hiện cartBar
    const [cartBar, setCartBar] = useState(false)
    //set State dataCartBarr để đổ dữ liệu vào cartBar
    const [dataCartBar, setDataCartBar] = useState([])

    useEffect(() => {
      const bottomBar = document.querySelector('.bottom__bar.cart__bar')
      const closeBottomBar = document.querySelector('.bottom__bar.cart__bar .closebar')   
      cartBar ? bottomBar.classList.add('show') : bottomBar.classList.remove('show')
      closeBottomBar.addEventListener('click', () => {
          bottomBar.classList.remove('show')
      })
        const items = products.filter((item) => {
            return storageCart.includes(item.id)
        })
        setDataCartBar(items)
      return () => {
          closeBottomBar.removeEventListener('click', () => {
              bottomBar.classList.remove('show')
          })
      }
    },[cartList])
    function handlCartItem(name) {
      setCartBar(true);
      //thêm sản phẩm vào mảng cartList
      setCartList(prev => [name, ...prev]);
      // xử lý khi bỏ  một sản phẩm khỏi giỏ hàng
      const cartList = Array.from(document.querySelectorAll('.cart__action .active'));
      const cartItem = cartList.map((item) => {
        return item.getAttribute('cartkey') || [];
      });
      setCartList(cartItem);
      // lưu danh sách giỏ hàng vào LocalStorage
      const jsoncart = JSON.stringify(cartItem);
      localStorage.setItem('CART_LIST', jsoncart);
    }
    return (
      <>
        <Header/>
        <div className='container'>
            <Routes>
              <Route exact path='/' element = {<Home/>}/>
              <Route path='/Products' element = {<Product onClick ={handlCartItem}/>}/>
              {/* <Route path='/Contact' element = {<Contact/>}/> */}
            </Routes>
            <div id='cart_btn' onClick={show}>
              <div className='cart__btn__item'>
                <span>{dataCartBar.length}</span>
                <div className='cart__btn__title'>
                  <span > Xem giỏ hàng</span>
                </div>          
                <i className="fas fa-shopping-cart"></i>
              </div>     
            </div>    
        </div>
        <Footer/>
        <BottomBar
          data = {dataCartBar}
          className = 'cart__bar'
          title = 'Giỏ hàng của bạn'
          onClick = {close}
        />
      </>
    );
}

export default App;
