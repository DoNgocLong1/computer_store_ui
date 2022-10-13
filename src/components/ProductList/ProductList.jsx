import React ,{ useState ,useMemo}from 'react'
import './ProductList.css'
import {useDispatch } from "react-redux";
import {addItem} from '../../store/ShoppingCart/CartSlice'

function ProductList({data}) {
    let rows = []
    let offsetBarLength = Math.ceil(data.length / 15) 
    for( let i = 0; i<offsetBarLength; i++ ) {
        rows.push(i)
    }
    console.log(offsetBarLength)
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST')) || []
/*     const handleClickFavourite = (e) => {
        e.target.classList.toggle('active')
        const item = e.target.getAttribute('favouritekey')
        onClickFavourite(item)
    } */
    const [startItems, setStartItems] = useState(0)
    const [lastItems, setLastItems] = useState(15)
    const [currentOffsetItems, setCurrentOffsetItems] = useState([])
    useMemo(() => {
        const offsetitem  = data.slice(startItems, lastItems)
        setCurrentOffsetItems(offsetitem)
       
    }, [startItems, lastItems, data])
    const dispatch = useDispatch()
    const handleClickAddToCart = (e) => {
        dispatch(addItem(
            data.find((item) =>
            item.id === e.target.getAttribute('cartkey'))))
    }
    const handleShowTitle = (e) => {
        const title = e.target.parentElement.querySelector('.title')
        title.classList.add('active')
    }
    const handleHideTitle = (e) =>{
        const title = e.target.parentElement.querySelector('.title')
        title.classList.remove('active')
    }
    const handleNextBtn = () => {
        if(lastItems < data.length){
            setStartItems(prev => prev + 15)
            setLastItems(prev => prev + 15)
        } 
    }
    const changeOffsetItemByNumber = (e) =>{
        const offset = +(e.target.value) * 15
        setStartItems(offset)
        setLastItems(offset + 15)
    }
    const handlePrevBtn = () => {
        if(startItems > 0){
            setStartItems(prev => prev - 15)
            setLastItems(prev => prev - 15)
        }      
    }
    return (
        <>
        {currentOffsetItems.map((item,index) => (
            <div key = {index} className=' col l-2-4 m-4 c-6'>
                <div className='product__item'>
                    <div className='product__item__image'>
                        <img  src = {item.image} alt="" />
                    </div>
                    <div className="product__item__info">
                        <div className='product__item_name'> <a href="./">{item.name}</a> </div>
                        <div className='product__item__price'>
                                <h2>{item.price} đ</h2>                               
                                <div className='product__item__action'>
                                    <span className='favourite__action'>
                                        <div className='favourite__title title'>
                                            <span> Thêm vào danh sách yêu thích</span>
                                        </div>
                                        <i
                                        type = 'favourite' 
                                        favouritekey = {item.id} 
                                       /*  onClick = {handleClickFavourite} */
                                        onMouseOver={handleShowTitle}
                                        onMouseLeave={handleHideTitle}
                                        className={
                                            storageFavourite.includes(item.id) ? 
                                            "fa-solid fa-heart active" : 
                                            "fa-solid fa-heart" 
                                        }></i> 
                                    </span>
                                    <span className='cart__action'>
                                        <div className='cart__title title'>
                                            <span> Thêm vào danh giỏ hàng</span>
                                        </div>
                                        <i
                                        type = 'cart'
                                        cartkey = {item.id}
                                        onClick={ e => handleClickAddToCart(e)}
                                        onMouseOver={handleShowTitle}
                                        onMouseLeave={handleHideTitle}
                                        className="fa-solid fa-cart-plus"></i>   
                                    </span>
                                </div>
                        </div>
                    </div>
                </div>                   
            </div>
        ))}
           <div className="offset__bar">
                        <button className="prevbtn btn" onClick={handlePrevBtn}> 
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <div className="offset__cont">                           
                            {rows.map((number, index) => ( 
                            <button 
                            className = "btn" 
                            value = {number} 
                            onClick = {changeOffsetItemByNumber}
                            key = {index}
                            >
                                {number + 1}
                            </button>))                            
                            }
                        </div>
                        <button className="nextbtn btn" onClick = {handleNextBtn}> 
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
        </> 
    )
}
export default ProductList