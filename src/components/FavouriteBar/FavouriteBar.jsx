import React, { useEffect } from "react";
import './FavouriteBar.css'
function FavouriteBar({data}) {
     useEffect(() => {
        const deleteItem = Array.from(document.querySelectorAll('.bottom__bar .deleteitem'))
        console.log(deleteItem)
        deleteItem.forEach((item) => {
            item.addEventListener('click', () => {
                const codeItem = item.getAttribute('favouritecode')
                if(data.includes(codeItem)) {
                    //useContext
                }
            })
        })
    }, [data])
    return(
        <div className="bottom__bar  favourite__bar">
            <div className="bottom__bar__header">
                <h1>Danh mục sản phẩm yêu thích</h1>
                <i className="fa-solid fa-xmark closebar"></i>
            </div>
            <div className="bottom__bar__item">
            {data === [] ?
                <div className="null__item">
                    fgjrtnrtnrtn
                </div>
                :         
                data.map((item, index) => (
                    <div 
                    className="item" 
                    key= {index} 
                    >
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
                    <i 
                    className="fa-solid fa-xmark deleteitem"
                    favouritecode = {item.id}
                    ></i>
                    </div>
                </div>

                )) 
            }                  
            </div>           
    </div> 
    )
}
export default FavouriteBar