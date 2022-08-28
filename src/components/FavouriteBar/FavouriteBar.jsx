import React from "react";
function FavouriteBar({data}) {
    return(
        <div className="bottom__bar__item">
                    {data.map((item, index) => (
                        <div className="item" key={index}>
                        <div className="item__img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="item__info">
                            <div className="item__info__name">
                                <a href="/">
                                {item.name}
                                </a>
                            </div>
                            <div className="item__info__price">
                                <span>
                                    {item.price}
                                </span>
                                <i className="fa-solid fa-cart-plus"></i>
                            </div>
                        </div>
                        <div className="item__btn ">
                        <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>

                    )) }                   
                </div>)
}
export default FavouriteBar