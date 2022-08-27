import React from "react";
import '../../data/overview/triton'
const TRITON_STORAGE_KEY = 'TRITON'
const triton = JSON.parse(localStorage.getItem(TRITON_STORAGE_KEY) || [])
function Triton() {
    return(
        <div className="overview__container triton">
            <div className="overview__header triton">
                <h1 className = "overview__header__title triton">TRITON</h1>
                <p className = "overview__header__content triton">Chơi ở bất cứ đâu bạn muốn, với máy tính xách tay mỏng hơn được trang bị phần cứng mới nhất.</p>
            </div>
            <div className="overview__item triton">
                {triton.map((item,index) => (
                    <div key={index}    className="overview__item__img triton">
                        <img src={item.image} alt="" />
                        <p className="overview__item__name"> {item.name} </p>
                    </div>
                ))}
            </div>
        </div>      
    )

}
export default Triton