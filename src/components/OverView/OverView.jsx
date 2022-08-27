import React from "react";
import Helio from "./Helio";
import Triton from "./Triton";
import './OverView.css'
import Orion from "./Orion";
import Gear from "./Gear";
import Monitor from "./Monitor";
function OverView() {
    return (
        <div className="overview">
            <Helio/>
            <Triton/>
            <Orion/>
            <Monitor/>
            <Gear/>
        </div>
    )
}
export default OverView