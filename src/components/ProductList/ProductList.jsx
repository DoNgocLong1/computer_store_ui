import React from 'react'
import './ProductList.css'
function ProductList({onClickFavourite, onClickCart, data}) {
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST')) || []
    const storageCart = JSON.parse(localStorage.getItem('CART_LIST')) || []
    const handleClickFavourite = (e) => {
        e.target.classList.toggle('favourite')
        const item = e.target.getAttribute('favouritekey')
        onClickFavourite(item)
    }
    const handleClickAddToCart = (e) => {
        e.target.classList.toggle('addtocart')
        const item = e.target.getAttribute('oncartkey')
        onClickCart(item)
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
                                <span>
                                    <i 
                                    favouritekey = {item.id} 
                                    onClick = {handleClickFavourite}
                                    className={
                                        storageFavourite.includes(item.id) ? 
                                        "fa-solid fa-heart favourite" : 
                                        "fa-solid fa-heart" 
                                    }
                                     ></i>
                                    <i
                                    cartkey = {item.id}
                                    onClick={handleClickAddToCart}
                                    className={ storageCart.includes(item.id) ? 
                                    "fa-solid fa-cart-plus addtocart" : "fa-solid fa-cart-plus"}></i>
                                </span>
                        </div>
                    </div>
                </div>                   
            </div>
        ))}
        </> 
    )
}
export default ProductList