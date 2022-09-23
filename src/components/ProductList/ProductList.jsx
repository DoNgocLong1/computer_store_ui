import React,{useContext} from 'react'
import './ProductList.css'
import Context from "../../store/CartStore/Context";
import {addItem} from '../../store/CartStore/action'
import { useEffect } from 'react';
function ProductList({data}) {
    const [state, dispatch] = useContext(Context)
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST')) || []
/*     const handleClickFavourite = (e) => {
        e.target.classList.toggle('active')
        const item = e.target.getAttribute('favouritekey')
        onClickFavourite(item)
    } */
    useEffect(() => {

    },[state])
    const handleClickAddToCart = (e) => {
        dispatch(addItem(
            data.find((item) =>
            item.id === e.target.getAttribute('cartkey'))))
    }
    const handleShowTitle = (e) => {
        const title = e.target.parentElement.querySelector('.title')
        title.classList.add('active')
    }
    const handleHideTitle = (e) =>{
        const title = e.target.parentElement.querySelector('.title')
        title.classList.remove('active')
    }
    return (
        <>
        {data.map((item,index) => (
            <div key = {index} className=' col l-2-4 m-4 c-6'>
                <div className='product__item'>
                    <div className='product__item__image'>
                        <img  src = {item.image} alt="" />
                    </div>
                    <div className="product__item__info">
                        <div className='product__item_name'> <a href="./">{item.name}</a> </div>
                        <div className='product__item__price'>
                                <h2>{item.price} đ</h2>                               
                                <div className='product__item__action'>
                                    <span className='favourite__action'>
                                        <div className='favourite__title title'>
                                            <span> Thêm vào danh sách yêu thích</span>
                                        </div>
                                        <i
                                        type = 'favourite' 
                                        favouritekey = {item.id} 
                                       /*  onClick = {handleClickFavourite} */
                                        onMouseOver={handleShowTitle}
                                        onMouseLeave={handleHideTitle}
                                        className={
                                            storageFavourite.includes(item.id) ? 
                                            "fa-solid fa-heart active" : 
                                            "fa-solid fa-heart" 
                                        }></i> 
                                    </span>
                                    <span className='cart__action'>
                                        <div className='cart__title title'>
                                            <span> Thêm vào danh giỏ hàng</span>
                                        </div>
                                        <i
                                        type = 'cart'
                                        cartkey = {item.id}
                                        onClick={ e => handleClickAddToCart(e)}
                                        onMouseOver={handleShowTitle}
                                        onMouseLeave={handleHideTitle}
                                        className="fa-solid fa-cart-plus"></i>   
                                    </span>
                                </div>
                        </div>
                    </div>
                </div>                   
            </div>
        ))}
        </> 
    )
}
export default ProductList