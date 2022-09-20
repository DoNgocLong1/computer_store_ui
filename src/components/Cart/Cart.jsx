import React from "react";
import {Link} from 'react-router-dom'
import './Cart.css'
function Cart() {
    return(
        <div id="Cart">
            <h1>Cart component</h1>
            <button className="btn"> 
            <Link to ="/Products" className=" tab">Mua thêm hàng</Link></button>
        </div>       
    )
}
export default Cart