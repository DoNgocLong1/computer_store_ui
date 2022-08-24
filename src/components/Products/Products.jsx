import React from "react";
import './Products.css'
import GraphicsCard from'../GraphicsCard/GraphicsCard'
import Computers from'../Computers/Computers'
function Products() {
    return (
        <div id="Products">
            <GraphicsCard/>
            <Computers/>
        </div>
    )
}
export default Products