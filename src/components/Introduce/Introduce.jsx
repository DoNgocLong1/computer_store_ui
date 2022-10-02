import React from "react";
import './Introduce.css'
/* import IntroduceItem from "./IntroduceItem/IntroduceItem"; */
import introducceBlog from '../../data/introduce/introduceBlog'

function Introduce() {
    return (
        <div id="introduce">
            <div className="banner">
                <img src="https://static.acer.com/up/Resource/Acer/Events/nextatacer-2022/20220427/GPC_AGW_Banner_Predator_2560.jpg" alt="" />
                <div className="banner__detail">
                    <img src="https://static.acer.com/up/Resource/Acer/Events/nextatacer-20211013/20210922/next-acer.png" alt="" />
                    <p>GLOBAL PRESS CONFERENCE 2022</p>
                    <h1>NEW PREDATOR PRODUCTS</h1>
                </div>
            </div>
            <div className="centerImage">
                <img src="https://static.acer.com/up/Resource/Acer/SpatialLabs_2022/20220511/acer-spatialLabs-overview-l.jpg" alt="" />
                <div className="centerImage__content">
                    <h1>
                        Bring Digital Content into the Next Dimension
                    </h1>
                    <p>
                        Acer SpatialLabs™ delivers intuitive interaction and immersive sensation via advanced optical, display, and real-time rendering solutions. It features the combination of an eye-tracking solution, a stereoscopic 3D display, real-time rendering, AI technologies, along with the newest shaders and drivers.
                    </p>
                </div>
            </div>
            {/* <IntroduceItem/> */}
            <div className="introduce__blog">
            {introducceBlog.map((item, index) => (
                <div className="introduce__blog__item" key={index}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="introduce__blog__img">
                    <img src={item.img} alt="" />
                </div>
                <div className="introduce__blog__content">
                    <h1>
                        {item.title}
                    </h1>
                    <p>
                       {
                        item.content
                       }
                    </p>
                </div>
                <button className="btn">
                    Lean more
                </button>        
            </div> 
            ))}
            </div>
        </div>     
    )
}

export default Introduce