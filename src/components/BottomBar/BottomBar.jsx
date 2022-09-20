import React, {useState, useEffect}  from "react";
import './BottomBar.css'
function BottomBar({data, className, title, onClick}) {
    const storageCart = JSON.parse(localStorage.getItem('CART_LIST') || [])
    console.log(data)
     useEffect(() => {
        const deleteItem = Array.from(document.querySelectorAll('.bottom__bar .deleteitem'))
        deleteItem.forEach((item) => {
            item.addEventListener('click', () => {
                const codeItem = item.getAttribute('favouritecode')
                if(storageCart.includes(codeItem)) {
                    storageCart.split()
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
    const handleDeleteitemFormBotomBar = (e) => {
        const itemID = e.target.parentElement.getAttribute('code')
        const cartList = Array.from(document.querySelectorAll('.cart__action .active'));
        const favouriteList = Array.from(document.querySelectorAll('.favourite__action .active'));
        if(e.target.getAttribute('type') === 'cart') {
            cartList.forEach((item) => {
                console.log(item.getAttribute('cartkey') /* === itemID */)
                if(item.getAttribute('cartkey') === itemID){
                    item.click()
                }          
            })
        }else{
            favouriteList.forEach((item) => {
                console.log(item.getAttribute('favouritekey') /* === itemID */)
                if(item.getAttribute('favouritekey') === itemID){
                    item.click()
                }        
            })
        }          
    }
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
                <div className="totalprice__content">
                    <span>Tổng tiền: </span> <p>  {price} đ</p>
                </div>                  
                <button className="btn payment__btn">Xem giỏ hàng</button>
            </div>}
            <div className="bottom__bar__item">
            {data.length === 0 &&
                <div className="null__item">
                    <h1>Chưa có sản phẩm trong {title}</h1>
                </div>
                }      
                {data.map((item) => (
                    <div 
                    className="item" 
                    key = {item.id}
                    code = {item.id} 
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
                        <div className="item__btn "
                        code = {item.id} 
                        onClick={handleDeleteitemFormBotomBar}>
                        <i 
                        type = {className === 'cart__bar' ? 'cart' : 'favourite'}                
                        className="fa-solid fa-xmark"
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