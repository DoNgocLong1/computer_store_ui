import React from "react";
import './Home.css'
import '../../data/imagesSlide'
import ImageSlide from "../ImageSlide/ImageSlide";
import OverView from "../OverView/OverView";  
import Advertisement from "../Advertiserment/Advertisement";
function Home() {   
    return (       
        <div id="home">
            <ImageSlide/>
            <OverView/>
            <Advertisement/>
        </div>
    )
}
export default Home