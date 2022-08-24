import React from "react";
import Helio from "./Helio";
import Triton from "./Triton";
import './OverView.css'
import Orion from "./Orion";
function OverView() {
    return (
        <div className="overview">
            <Helio/>
            <Triton/>
            <Orion/>
        </div>
    )
}
export default OverView