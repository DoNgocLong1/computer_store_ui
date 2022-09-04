import React from 'react'
import '../../data/products/graphicsCard'
import './GraphicsCard.css'

function GraphicsCard({onClick}) {
    const CARD_STORAGE_KEY = 'VIK_CARD'
    const graphicsCards = JSON.parse(localStorage.getItem(CARD_STORAGE_KEY) || '[]')
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST'))
    const handleClick = (e) => {
        e.target.classList.toggle('favourite')
        const item = e.target.getAttribute('favouritekey')
        onClick(item)
    }
    return (
        <>
        {graphicsCards.map((graphicsCard,index) => (
            <div key = {index} className=' col l-2-4 m-4 c-6'>
                <div className='product__item'>
                    <div className='product__item__image'>
                        <img  src = {graphicsCard.image} alt="" />
                    </div>
                    <div className="product__item__info">
                        <div className='product__item_name'> <a href="./">{graphicsCard.name}</a> </div>
                        <div className='product__item__price'>
                                <h2>{graphicsCard.price} đ</h2>                               
                                <span>
                                    <i favouritekey = {graphicsCard.id} 
                                     onClick = {handleClick}
                                     className={
                                        storageFavourite.includes(graphicsCard.id) ? "fa-solid fa-heart favourite" : 
                                        "fa-solid fa-heart" 
                                    }
                                     ></i>
                                    <i className="fa-solid fa-cart-plus"></i>
                                </span>
                        </div>
                    </div>
                </div>                   
            </div>
        ))}
        </> 
    )
}
export default GraphicsCard