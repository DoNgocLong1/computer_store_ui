import React from "react";
import { useState, useEffect,} from "react";
import './Products.css'
import GraphicsCard from'../GraphicsCard/GraphicsCard'
import Computers from'../Computers/Computers'
const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';
    const computers = JSON.parse(localStorage.getItem(COMPUTER_STORAGE_KEY)|| [])
function Products() {
    const [favourite, setFavourite] = useState('')
    const [favouritelist, setFavouritelist] = useState([])

    useEffect(() => {
        /* setFavouritelist( prev => [prev, favourite]) */
        const favo = Array.from(document.querySelectorAll('.favourite'))
        const favouriteItem = favo.map((item) => {
            return item.getAttribute('favouritekey') || []
        })
        /* setFavouritelist(favouriteItem) */
    }, [favouritelist])
    console.log(favourite)
    const checklist = computers.filter((item) => {
        return favouritelist.includes(item.id)
    })
    const getAttribute = (name) => {
        setFavourite(name)
    }
    return (
        <div id="Products">
            <div className='product__container grid wide'>
                <div className="row">
                    <GraphicsCard/>
                    <Computers onClick = {getAttribute}/>
                </div>
            </div>
            <div className="bottom__bar favourite__bar">
                <div className="bottom__bar__header">
                    <h1>Danh mục sản phẩm yêu thích</h1>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="bottom__bar__item">


                    {checklist.map((item, index) => (
                        <div className="item" key={index}>
                        <div className="item__img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="item__info">
                            <div className="item__info__name">
                                <a href="/">
                                {item.name}
                                </a>
                            </div>
                            <div className="item__info__price">
                                <span>
                                    {item.price}
                                </span>
                                <i className="fa-solid fa-cart-plus"></i>
                            </div>
                        </div>
                        <div className="item__btn ">
                        <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>

                    )) }                   
                </div>
            </div>        
        </div>
    )
}
export default Products