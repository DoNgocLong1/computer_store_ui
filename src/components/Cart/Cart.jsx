import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import Context from "../../store/CartStore/Context";
import {deleteItem, addItem, removeItem} from '../../store/CartStore/action'
import './Cart.css'
function Cart() {
    const [state, dispatch] = useContext(Context)
    const handleRemoveItem = (e) => {
        dispatch(removeItem(
            state.cartList.find((item) =>
            item.id === e.target.parentElement.getAttribute('code'))
        ))         
    }
    const handleIncreaseItem = e => {
        dispatch(addItem(
            state.cartList.find((item) =>
            item.id === e.target.getAttribute('code'))
        ))
    }

    const handleDecreaseItem = e => {
        console.log(state.cartList.find((item) =>
        item.id === e.target.getAttribute('code')))
        dispatch(deleteItem(
            state.cartList.find((item) =>
            item.id === e.target.getAttribute('code'))
        ))
    }
    return(
        <div id="Cart">
            <div className="cart__img">
                <img src="https://static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181227/Immersion_large.jpg" alt="" />
            </div>
            <div className="cartcontainer grid wide">
                <table className="cartcontainer__item">
                    <thead>
                        <tr>
                            <td>Hình ảnh</td>
                            <td>Tên sản phẩm</td>
                            <td>Số lượng</td>
                            <td>Đơn giá</td>
                            <td>Thành tiền</td>
                        </tr>
                    </thead>       
                    <tbody>
                        {state.cartList.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.image} alt="" /></td>
                            <td>{item.name}</td>
                            <td>
                                <span className="table__cout__item">
                                    <span 
                                    code = {item.id}
                                    onClick = {e => handleIncreaseItem(e)}
                                    >+</span>
                                    <span >{item.count}</span>  
                                    <span 
                                    code = {item.id}
                                    onClick = {e => handleDecreaseItem(e)}
                                    >-</span>
                                </span>
                                <span className="table__delete__item" 
                                code = {item.id}
                                onClick = {e => handleRemoveItem(e)}
                                >
                                <i className="fa-solid fa-trash-can"></i>
                                </span>
                            </td>
                            <td>{item.price}</td>
                            <td>{(item.count * Number(item.price.split('.').join(''))).toLocaleString("en")}</td>
                        </tr> 
                        ))}
                    </tbody>     
                </table>
            </div>
            <button className="btn puchase__btn"> 
            <Link to ="/Products" className=" tab">Mua thêm hàng</Link></button>
        </div>       
    )
}
export default Cart