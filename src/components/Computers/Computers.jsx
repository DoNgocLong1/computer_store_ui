import React from "react";
import './Computers.css'
import '../../data/products/computers'
function Computers({onClick}) {
    const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';
    const computers = JSON.parse(localStorage.getItem(COMPUTER_STORAGE_KEY)|| [])
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST'))
        const handleClick = (e) => {
        e.target.classList.toggle('favourite')
        const item = e.target.getAttribute('favouritekey')
        onClick(item)
    } 
    return (
        <>
        {computers.map((computer,index) => (
            <div key = {index} className=' col l-2-4 m-4 c-6'>
                <div className='product__item'>
                    <div className='product__item__image'>
                        <img  src = {computer.image} alt="" />
                    </div>
                    <div className="product__item__info">
                        <div className='product__item_name'> 
                            <a href="./">{computer.name}</a>
                        </div>
                        <div className='product__item__price'>
                                <h2>{computer.price} đ</h2>                          
                                <span>
                                    <i favouritekey = {computer.id} 
                                     onClick = {handleClick}
                                     className={
                                        storageFavourite.includes(computer.id) ? "fa-solid fa-heart favourite" : 
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
export default Computers