import { useState, useEffect, useLayoutEffect} from "react";
import './Products.css'
import ProductList from'../ProductList/ProductList'
import BottomBar from "../BottomBar/BottomBar";
import '../../data/products/graphicsCard'
import '../../data/products/computers'
import {cartData, close, show, graphicsCard, computers} from './ProductData'
function Products({onClick}) {
    // lấy dữ liệu computer từ localStorage
    /* const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';
    const computers = JSON.parse(localStorage.getItem(COMPUTER_STORAGE_KEY) || [])
    const CARD_STORAGE_KEY = 'VIK_CARD'
    const graphicsCard = JSON.parse(localStorage.getItem(CARD_STORAGE_KEY) || [])
 */
    //--------phần lấy dữ liệu và set state cho danh mục yêu thích --------- 
    //lấy dữ liệu các sản phẩm ưu thích từ LocalStorage nếu chưa có FAVOURITE_LIST trong LocalStorage thì khởi tạo FAVOURITE_LIST rỗng
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST') || localStorage.setItem('FAVOURITE_LIST', JSON.stringify([]))) 
    //set State favouriteList là 1 mảng gồm các id sản phẩm ưu thích
    const [favouriteList, setFavouriteList] = useState([storageFavourite])
    //set State favouriteBar để ẩn hiện favouriteBar
    const [favouriteBar, setFavouriteBar] = useState(false)
    //set State dataFavouriteBar để đổ dữ liệu vào favouriteBar
    const [dataFavouriteBar, setDataFavouriteBar] = useState([])

    //--------phần lấy dữ liệu và set state cho giỏ hàng --------- 
    const storageCart = JSON.parse(localStorage.getItem('CART_LIST') || localStorage.setItem('CART_LIST', JSON.stringify([]))) 
    //set State cartList là 1 mảng gồm các id sản phẩm ưu thích
    const [cartList, setCartList] = useState([storageCart])
    //set State cartBar để ẩn hiện cartBar
    const [cartBar, setCartBar] = useState(false)
    //set State dataCartBarr để đổ dữ liệu vào cartBar
    const [dataCartBar, setDataCartBar] = useState([])
    const productList = [...computers, ...graphicsCard]
    useEffect(() => {
        const bottomBar = document.querySelector('.bottom__bar.favourite__bar')
        const closeBottomBar = document.querySelector('.bottom__bar.favourite__bar .closebar')   
        favouriteBar ? bottomBar.classList.add('show') : bottomBar.classList.remove('show')
        closeBottomBar.addEventListener('click', () => {
            bottomBar.classList.remove('show')
        })
        const items = productList.filter((item) => {
            return favouriteList.includes(item.id)
        })
        setDataFavouriteBar(items)
        return () => {
            closeBottomBar.removeEventListener('click', () => {
                bottomBar.classList.remove('show')
            })
        }
    },[favouriteList])

    // xử lý ẩn hiện giỏ hàng
    useLayoutEffect(() => {
        const bottomBar = document.querySelector('.bottom__bar.cart__bar')
        const closeBottomBar = document.querySelector('.bottom__bar.cart__bar .closebar')   
        cartBar ? bottomBar.classList.add('show') : bottomBar.classList.remove('show')
        closeBottomBar.addEventListener('click', () => {
            bottomBar.classList.remove('show')
        })
        const items = productList.filter((item) => {
            return cartList.includes(item.id)
        })
        setDataCartBar(items)
        return () => {
            closeBottomBar.removeEventListener('click', () => {
                bottomBar.classList.remove('show')
            })
        }
    },[cartList])

    //hàm xử lý thêm và bỏ yêu thích
    const handleFavouriteItem = (name) => {
        setFavouriteBar(true)
        //thêm sản phẩm yêu thích vào mảng favouriteList
        setFavouriteList(prev => [name, ...prev])
        // xử lý khi bỏ thích một sản phẩm
        const favo = Array.from(document.querySelectorAll('.favourite'))
        const favouriteItem = favo.map((item) => {
            return item.getAttribute('favouritekey') || []
        })
        setFavouriteList(favouriteItem)
        // lưu danh sách yêu thích vào LocalStorage
        const jsonFavourite = JSON.stringify(favouriteItem)
        localStorage.setItem('FAVOURITE_LIST', jsonFavourite)
    }


    // hàm xử lý thêm và bỏ khỏi giỏ hàng
 /*    const handlCartItem = (name) => {
        setCartBar(true)
        //thêm sản phẩm vào mảng cartList
        setCartList(prev => [name, ...prev])
        // xử lý khi bỏ  một sản phẩm khỏi giỏ hàng
        const cartList = Array.from(document.querySelectorAll('.addtocart'))
        const cartItem = cartList.map((item) => {
            return item.getAttribute('cartkey') || []
        })
        setCartList(cartItem)
        // lưu danh sách giỏ hàng vào LocalStorage
        const jsoncart = JSON.stringify(cartItem)
        localStorage.setItem('CART_LIST', jsoncart)
    }
    console.log(dataCartBar)
 */
    return (
        <div id="Products">
            <div className='product__container grid wide'>
                <div className="row">
                    <ProductList 
                    onClickFavourite = {handleFavouriteItem}
                    onClickCart = {onClick}
                    data = {graphicsCard}
                    />
                    <ProductList 
                    onClickFavourite = {handleFavouriteItem}
                    onClickCart = {onClick}
                    data = {computers}
                    />
                </div>
            </div> {
            }
            <BottomBar 
            data = {dataFavouriteBar}
            className = 'favourite__bar'
            title = 'Danh mục sản phẩm yêu thích'
            /> 
            {/* <BottomBar
            data = {dataCartBar}
            className = 'cart__bar'
            title = 'Giỏ hàng của bạn'
            onClick = {close}
            />  */}
        </div>
    )
}
export default Products