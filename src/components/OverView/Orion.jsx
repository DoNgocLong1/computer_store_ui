import React from "react";
import '../../data/orion'
const ORION_STORAGE_KEY = 'ORION'
const orion = JSON.parse(localStorage.getItem(ORION_STORAGE_KEY) || [])
function Orion() {
    return(
        <div className="overview__container orion">
            <div className="overview__header orion">
                <h1 className = "overview__header__title orion">orion</h1>
                <p className = "overview__header__content orion">Bên trong bộ khung, một con quái vật đang chờ đợi. Đẩy mọi thứ lên mức tối đa.</p>
            </div>
            <div className="overview__item orion">
                {orion.map((item,index) => (
                    <div key={index}    className="overview__item__img orion">
                        <img src={item.image} alt="" />
                        <p className="overview__item__name"> {item.name} </p>
                    </div>
                ))}
            </div>
        </div>      
    )

}
export default Orion