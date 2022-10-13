import React from "react";
import {Link} from 'react-router-dom'
import {deleteItem, addItem, removeItem} from '../../store/ShoppingCart/CartSlice'
import { useSelector, useDispatch } from "react-redux";
import './Cart.css'
function Cart() {
    const {cartList,
        listLength,
        totalPrice } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleRemoveItem = (e) => {
        dispatch(removeItem(
            e.target.parentElement.getAttribute('code')
        ))         
    }
    const handleIncreaseItem = e => {
        dispatch(addItem(
            cartList.find((item) =>
            item.id === e.target.getAttribute('code'))
        ))
    }

    const handleDecreaseItem = e => {
        console.log(cartList.find((item) =>
        item.id === e.target.getAttribute('code')))
        dispatch(deleteItem(
            cartList.find((item) =>
            item.id === e.target.getAttribute('code'))
        ))
    }
    return(
        <div id="Cart">
            <div className="cart__img">
                <img src="https://static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181227/Immersion_large.jpg" alt="" />
            </div>
            <div className="cartcontainer grid wide">
                {listLength === 0 &&
                    <h1> You haven't ordered anything yet.</h1>
                }
                {listLength > 0 &&
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
                        {cartList.map((item, index) => (
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
                            <td>{item.total.toLocaleString("en")}</td>
                        </tr> 
                        ))}
                    </tbody>     
                </table>)}
            </div>
            {listLength > 0 &&
            <div className="payment grid wide">
                <h1>Subtotal : <span>{totalPrice.toLocaleString("en")}</span></h1>
                <h1>Total: <span>{totalPrice.toLocaleString("en")}</span></h1>
            </div>
            }
            <div className="cart_feature">
                <button className="btn puchase__btn"> 
                <Link to ="/Products" className=" tab"> Shopping</Link></button>
                {listLength > 0 &&
                <button className="btn payment__btn"> 
                <Link to ="/Products" className=" tab">Payment</Link></button>
                }          
            </div>
           
        </div>       
    )
}
export default Cart