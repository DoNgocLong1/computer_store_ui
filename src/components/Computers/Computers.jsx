import React from "react";
import './Computers.css'
import '../../data/computers'
function Computers() {
    const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';
    const computers = JSON.parse(localStorage.getItem(COMPUTER_STORAGE_KEY)|| [])
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
                                <span><i className="fa-solid fa-truck"></i></span>
                        </div>
                    </div>
                </div>                   
            </div>
        ))}
        </>
    )
}
export default Computers