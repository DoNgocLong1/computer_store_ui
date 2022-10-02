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
                {state.listLength === 0 &&
                    <h1> Chưa có sản phẩm trong giỏ hàng cùa bạn</h1>
                }
                {state.listLength > 0 &&
                (<table className="cartcontainer__item">
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Count</td>
                            <td>Price</td>
                            <td>Qty</td>
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
                </table>)}
            </div>
            {state.listLength > 0 &&
            <div className="payment grid wide">
                <h1>Tổng tạm tính : <span>{state.totalPrice.toLocaleString("en")}</span></h1>
                <h1>Thành tiền: <span>{state.totalPrice.toLocaleString("en")}</span></h1>
            </div>
            }
            <div className="cart_feature">
                <button className="btn puchase__btn"> 
                <Link to ="/Products" className=" tab">Mua thêm hàng</Link></button>
                {state.listLength > 0 &&
                <button className="btn payment__btn"> 
                <Link to ="/Products" className=" tab">Thanh toán</Link></button>
                }          
            </div>
           
        </div>       
    )
}
export default Cart