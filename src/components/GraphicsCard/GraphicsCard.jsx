import React from 'react'
import '../../data/graphicsCard'
import './GraphicsCard.css'

function GraphicsCard() {
    const CARD_STORAGE_KEY = 'VIK_CARD'
    const graphicsCards = JSON.parse(localStorage.getItem(CARD_STORAGE_KEY) || '[]')
    return (
        <div className='graphicsCard grid wide'>
            <div className="row">
                {graphicsCards.map((graphicsCard,index) => (
                    <div key = {index} className=' col l-2-4 m-4 c-12'>
                        <div className='graphicsCard__item'>
                            <div className='graphicsCard__item__image'>
                                <img  src = {graphicsCard.image} alt="" />
                            </div>
                            <div className="graphicsCard__item__info">
                                <div className='graphicsCard__item_name'> <a href="./">{graphicsCard.name}</a> </div>
                                <div className='graphicsCard__item__price'>
                                        <h2>{graphicsCard.price} đ</h2>                               
                                        <span><i className="fa-solid fa-truck"></i></span>
                                </div>
                            </div>
                        </div>                   
                    </div>
                ))}
            </div>    
        </div>
    )
}
export default GraphicsCard