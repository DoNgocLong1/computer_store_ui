import React, {useContext}  from "react";
import './BottomBar.css'
import Context from "../../store/CartStore/Context";
import { Link } from "react-router-dom";
import {deleteItem, addItem, removeItem} from '../../store/CartStore/action'
import products from'../../data/products/products'
function BottomBar({className, title, onClick}){
    const [state, dispatch] = useContext(Context)
    const handleRemoveitemFormBottomBar = (e) => {
        dispatch(removeItem(
            state.cartList.find((item) =>
            item.id === e.target.parentElement.getAttribute('code'))
        ))         
    }
    const increaseItem = e => {
        dispatch(addItem(
            products.find((item) =>
            item.id === e.target.getAttribute('code'))
        ))
    }

    const decreaseItem = e => {
        console.log(state.cartList.find((item) =>
        item.id === e.target.getAttribute('code')))
        dispatch(deleteItem(
            state.cartList.find((item) =>
            item.id === e.target.getAttribute('code'))
        ))
    }
    return( 
        <div className = {`bottom__bar  ${className}`}>
            <div className="bottom__bar__header">
                <h1>{title}</h1>
                <i 
                onClick={onClick}
                className="fa-solid fa-xmark closebar"
                ></i>
            </div>
            {className === 'cart__bar' && 
            <div className="totalprice">
                <div className="totalprice__content">
                    <span>Tổng tiền: </span> <p>  {
                    state.totalPrice.toLocaleString("en")
                    } đ</p>
                </div>                  
                <button className="btn payment__btn">
                    <Link to ="/Cart" className="cart__link">Xem giỏ hàng</Link>      
                </button>
            </div>}
            <div className="bottom__bar__item">
             {state.listLength === 0 &&
                <div className="null__item">
                    <h1>Chưa có sản phẩm trong {title}</h1>
                </div>
                }      
                {state.cartList.map((item, index) => (
                    <div 
                    className="item" 
                    key = {index}
                    code = {item.id} 
                    >
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
                                <div className="item__count">
                                    <span 
                                        code = {item.id}
                                        onClick ={ e => increaseItem(e)}
                                    >+</span>
                                    <span
                                        code = {item.id}
                                    >{item.count}</span>
                                    <span
                                        code = {item.id}
                                        onClick = {e => decreaseItem(e)}
                                    >-</span>
                                </div>
                            </div>
                        </div>
                        <div className="item__btn "
                        code = {item.id} 
                        onClick={handleRemoveitemFormBottomBar}>
                        <i 
                        type = {className === 'cart__bar' ? 'cart' : 'favourite'}                
                        className="fa-solid fa-xmark"
                        ></i>
                        </div>
                    </div>

                ))
               
            }                  
            </div>           
    </div> 
    )
}
export default BottomBar
