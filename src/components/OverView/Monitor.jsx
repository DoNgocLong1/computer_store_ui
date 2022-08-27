import React from "react";
import '../../data/overview/monitor'
const MONITOR_STORAGE_KEY = 'MONITOR'
const monitor = JSON.parse(localStorage.getItem(MONITOR_STORAGE_KEY) || [])
function Monitor() {
    return(
        <div className="overview__container monitor">
            <div className="overview__header monitor">
                <h1 className = "overview__header__title monitor">MÀN HÌNH GAMING</h1>
                <p className = "overview__header__content monitor">Màn hình trò chơi của bạn phải là màn hình tốt nhất, cho dù là màn hình cong, phẳng, 4K hay FHD.</p>
            </div>
            <div className="overview__item monitor">
                {monitor.map((item,index) => (
                    <div key={index}    className="overview__item__img monitor">
                        <img src={item.image} alt="" />
                        <p className="overview__item__name"> {item.name} </p>
                    </div>
                ))}
            </div>
        </div>      
    )

}
export default Monitor