import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import Context from "../../store/CartStore/Context";
import './Cart.css'
function Cart() {
    const [state, dipatch] = useContext(Context)
    return(
        <div id="Cart">
            <div className="cart__img">
                <img src="https://static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181227/Immersion_large.jpg" alt="" />
            </div>
            <div className="cartcontainer grid wide">
                <table className="cartcontainer__item">
                    <thead>
                        <tr>
                            <td>image</td>
                            <td>name</td>
                            <td>count</td>
                            <td>price</td>
                            <td>total price</td>
                        </tr>
                    </thead>       
                    <tbody>
                        {state.cartItems.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.image} alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
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