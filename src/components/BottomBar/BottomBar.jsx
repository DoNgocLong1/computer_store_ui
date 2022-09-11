import React, {useState, useEffect}  from "react";
import './BottomBar.css'
function BottomBar({data, className, title, onClick}) {
     useEffect(() => {
        const deleteItem = Array.from(document.querySelectorAll('.bottom__bar .deleteitem'))
        deleteItem.forEach((item) => {
            item.addEventListener('click', () => {
                const codeItem = item.getAttribute('favouritecode')
                if(data.includes(codeItem)) {
                    //useContext
                }
            })
        })
    }, [data])
    const [price, setPrice] = useState(0)
    useEffect(() => {
        setPrice(data.reduce((price, item) => {
            return price += Number(item.price.split('.').join(''))
        },0))
        /* for( let i = 0; i <= price.toString().length; i+=3) {
            console.log(i)
            console.log(price.toString().slice(-4,-1))
        } */
    }, [data])
    return( 
        <div className = {`bottom__bar  ${className}`}>
            <div className="bottom__bar__header">
                <h1>{title}</h1>
                <i 
                onClick={onClick}
                className="fa-solid fa-xmark closebar"
                ></i>
            </div>
            {className === 'cart__bar' && 
            <div className="totalprice">
                    <span>Tổng tiền: </span> <p>  {price} đ</p>
                    <button className="btn payment__btn">Thanh toán</button>
            </div>}
            <div className="bottom__bar__item">
            {data.length == 0 &&
                <div className="null__item">
                    <h1>Chưa có sản phẩm trong {title}</h1>
                </div>
                }      
                {data.map((item, index) => (
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
export default BottomBar