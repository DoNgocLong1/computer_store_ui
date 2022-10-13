import React from "react";
import './OverView.css'
import OverViewContent from "./OverViewContent";
import '../../data/overview/helio'
import '../../data/overview/triton'
import '../../data/overview/orion'
import '../../data/overview/monitor'
import '../../data/overview/gear'
const helio = JSON.parse(localStorage.getItem('HELIO') || [])
const triton = JSON.parse(localStorage.getItem('TRITON') || [])
const orion = JSON.parse(localStorage.getItem('ORION') || [])
const monitor = JSON.parse(localStorage.getItem('MONITOR') || [])
const gear = JSON.parse(localStorage.getItem('GEAR') || [])
function OverView() {
    return (
        <div className="overview">
            
            <OverViewContent
            data = {helio}
            className = 'helio'
            title = 'HELIOS'
            content = 'Bigger, stronger, and with more power to spare. Solve every game with Helios at your back.'
            />
            <OverViewContent
            data = {triton}
            className = 'triton'
            title = 'TRITON'
            content = 'Play wherever you want, with a slimmer laptop powered by the latest hardware.'
            />
            <OverViewContent
            data = {orion}
            className = 'orion'
            title = 'ORION'
            content = 'Inside the skeleton, a monster awaits. Push everything to the maximum.'
            />
            <OverViewContent
            data = {monitor}
            className = 'monitor'
            title = 'MONITOR'
            content = 'Your game monitor should be the best, whether curved, flat, 4K or FHD.'
            />
            <OverViewContent
            data = {gear}
            className = 'gear'
            title = 'GADGETS và GEAR'
            content = 'Outfit your setup with super responsive mice, mechanical keyboards, sound-rich headphones, and comfortable gaming chairs.'
            />
        </div>
    )
}
export default OverView