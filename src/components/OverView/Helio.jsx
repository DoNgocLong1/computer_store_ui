import React from "react";
import '../../data/overview/helio'
const HELIO_STORAGE_KEY = 'HELIO'
const helio = JSON.parse(localStorage.getItem(HELIO_STORAGE_KEY) || [])
function Helio() {
    return(
        <div className="overview__container helio">
            <div className="overview__header helio">
                <h1 className = "overview__header__title helio">HELIOS</h1>
                <p className = "overview__header__content helio">Lớn hơn, mạnh hơn và có nhiều năng lượng để dự phòng. Giải quyết mọi trò chơi với Helios ở phía sau của bạn.</p>
            </div>
            <div className="overview__item helio">
                {helio.map((item,index) => (
                    <div key={index}    className="overview__item__img helio">
                        <img src={item.image} alt="" />
                        <p className="overview__item__name"> {item.name} </p>
                    </div>
                ))}
            </div>
        </div>      
    )

}
export default Helio