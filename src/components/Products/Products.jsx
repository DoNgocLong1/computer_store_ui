import React from "react";
import './Products.css'
import GraphicsCard from'../GraphicsCard/GraphicsCard'
import Computers from'../Computers/Computers'
function Products() {
    return (
        <div id="Products">
            <div className='product__container grid wide'>
                <div className="row">
                    <GraphicsCard/>
                    <Computers/>
                </div>
            </div>           
        </div>
    )
}
export default Products