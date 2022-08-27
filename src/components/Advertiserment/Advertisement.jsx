import React from "react";
import './Advertisement.css'
import '../../data/overview/advertisement'
const ADVERTISEMENT_KEY = 'ADVERTISEMENT'
const advertisementStorage = JSON.parse(localStorage.getItem(ADVERTISEMENT_KEY) || [])
function Advertisement() {
    return(
        <div className="advertisement">
            {advertisementStorage.map((item, index) => (
                <div key={index} className="advertisement__item">
                    <div className="advertisement__item__img">
                        <img src={item.image} alt="" />
                        <p className="item__img__title">{item.title}</p>
                    </div>
                    <div className="advertisement__item__introduce">
                        <h1 className="item__introduce__title">{item.intro}</h1>
                            <a href="./"><button className="btn">Xem thêm</button></a>                     
                    </div>                  
                </div>
            ))}
        </div>
    )
}
export default Advertisement