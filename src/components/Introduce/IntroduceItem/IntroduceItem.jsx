import React from "react";
import './IntroduceItem.css'

function IntroduceItem() {
    return(
        <div className="introduce__item">
            <div className="introduce__item__img">
                <img src="https://static.acer.com/up/Resource/Acer/SpatialLabs_2022/20220511/D7_FV_KSP_1.jpg" alt="" />
            </div>
            <div className="introduce__item__detail">
                <h1>
                Breaking the Boundaries of Visualization
                </h1>
                <p>
                Bridging the virtual domain of ideas with eye-grabbing 3D presentation in the real world, lets designers accelerate the ideation to final design process. Marketers, educators, and other professionals can engage audiences in more immersive ways, and gamers can play 3D games the way the developers intended.
                </p>
            </div>
        </div>
    )
}
export default IntroduceItem