import React from "react";
import '../../data/overview/gear'
const GEAR_STORAGE_KEY = 'GEAR'
const gear = JSON.parse(localStorage.getItem(GEAR_STORAGE_KEY) || [])
function Gear() {
    return(
        <div className="overview__container gear">
            <div className="overview__header gear">
                <h1 className = "overview__header__title gear">GADGETS và GEAR</h1>
                <p className = "overview__header__content gear">Trang bị cho thiết lập của bạn với chuột siêu nhạy, bàn phím cơ, tai nghe giàu âm thanh và ghế chơi game thoải mái.</p>
            </div>
            <div className="overview__item gear">
                {gear.map((item,index) => (
                    <div key={index}    className="overview__item__img gear">
                        <img src={item.image} alt="" />
                        <p className="overview__item__name"> {item.name} </p>
                    </div>
                ))}
            </div>
        </div>      
    )

}
export default Gear