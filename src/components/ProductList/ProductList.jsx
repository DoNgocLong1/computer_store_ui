import React from 'react'
import './ProductList.css'
function ProductList({onClickFavourite, onClickCart, data}) {
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST')) || []
    const storageCart = JSON.parse(localStorage.getItem('CART_LIST')) || []
    const handleClickFavourite = (e) => {
        e.target.classList.toggle('active')
        const item = e.target.getAttribute('favouritekey')
        onClickFavourite(item)
    }
    const handleClickAddToCart = (e) => {
        e.target.classList.toggle('active')
        const item = e.target.getAttribute('oncartkey')
        onClickCart(item)
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
                                        onClick = {handleClickFavourite}
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
                                        onClick={handleClickAddToCart}
                                        onMouseOver={handleShowTitle}
                                        onMouseLeave={handleHideTitle}
                                        className={ storageCart.includes(item.id) ? 
                                        "fa-solid fa-cart-plus active" : "fa-solid fa-cart-plus"}></i>   
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