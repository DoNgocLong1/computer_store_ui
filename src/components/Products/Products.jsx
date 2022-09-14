import { useState, useEffect, useLayoutEffect} from "react";
import './Products.css'
import ProductList from'../ProductList/ProductList'
import BottomBar from "../BottomBar/BottomBar";
import products from '../../data/products/products'
function Products({onClick}) {
    //--------phần lấy dữ liệu và set state cho danh mục yêu thích --------- 
    //lấy dữ liệu các sản phẩm ưu thích từ LocalStorage nếu chưa có FAVOURITE_LIST trong LocalStorage thì khởi tạo FAVOURITE_LIST rỗng
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST') || localStorage.setItem('FAVOURITE_LIST', JSON.stringify([]))) 
    //set State favouriteList là 1 mảng gồm các id sản phẩm ưu thích
    const [favouriteList, setFavouriteList] = useState([storageFavourite])
    //set State favouriteBar để ẩn hiện favouriteBar
    const [favouriteBar, setFavouriteBar] = useState(false)
    //set State dataFavouriteBar để đổ dữ liệu vào favouriteBar
    const [dataFavouriteBar, setDataFavouriteBar] = useState([])
    const [softRule, setSoftRule] = useState('default')
    const [softItem, setSoftItem] = useState('all')
    useEffect(() => {
        const bottomBar = document.querySelector('.bottom__bar.favourite__bar')
        const closeBottomBar = document.querySelector('.bottom__bar.favourite__bar .closebar')   
        favouriteBar ? bottomBar.classList.add('show') : bottomBar.classList.remove('show')
        closeBottomBar.addEventListener('click', () => {
            bottomBar.classList.remove('show')
        })
        const items = products.filter((item) => {
            return storageFavourite.includes(item.id)
        })
        setDataFavouriteBar(items)
        return () => {
            closeBottomBar.removeEventListener('click', () => {
                bottomBar.classList.remove('show')
            })
        }
    },[favouriteList])

    //xử lý sắp xếp sản phẩm
    let data;
    const handleIncreseSoft = () => {
        products.sort((prevItem, nextItem) => {
        return prevItem.price.split('.').join('') - nextItem.price.split('.').join('')
        })
        data = products
    }
    const handleDecreseSoft = () => {
        products.sort((prevItem, nextItem) => {
        return nextItem.price.split('.').join('') - prevItem.price.split('.').join('')
        })
        data = products
    }
    switch(softRule) {
        case 'increase' :
            handleIncreseSoft()
            break;
        case 'decrease' :
            handleDecreseSoft()
            break;
        default:
            data = products
            break;
    }


    //xử lý lọc sản phẩm
    const tabs = document.querySelectorAll('.select_items li')   
        tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => {  
                const tabActive = document.querySelector('.select_items li.active')             
                tabActive.classList.remove('active')               
                e.target.classList.add('active')
                setSoftItem( e.target.getAttribute('value'))
            })
        })
    switch(softItem) {
        case 'laptop' :
            data = products.filter((item) => {
                return item.type === 'laptop'
            })
            break;
        case 'monitor' :
            data = products.filter((item) => {
                return item.type === 'monitor'
            })
            break;
        case 'graphiccard' :
            data = products.filter((item) => {
                return item.type === 'graphicCard'
            })
            break;
        case 'all' :
            data = products
            break;
        default:
            data = products
            break;
    }  
    //hàm xử lý thêm và bỏ yêu thích
    const handleFavouriteItem = (name) => {
        setFavouriteBar(true)
        //thêm sản phẩm yêu thích vào mảng favouriteList
        setFavouriteList(prev => [name, ...prev])
        // xử lý khi bỏ thích một sản phẩm
        const favo = Array.from(document.querySelectorAll('.favourite'))
        const favouriteItem = favo.map((item) => {
            return item.getAttribute('favouritekey') || []
        })
        setFavouriteList(favouriteItem)
        // lưu danh sách yêu thích vào LocalStorage
        const jsonFavourite = JSON.stringify(favouriteItem)
        localStorage.setItem('FAVOURITE_LIST', jsonFavourite)
    }
    let offsetBarLength = Math.ceil(data.length / 15) 
    let rows = []
    for( let i = 0; i<offsetBarLength; i++ ) {
        rows.push(i)
    }
    const [startItems, setStartItems] = useState(0)
    const [lastItems, setLastItems] = useState(15)
    const [currentOffsetItems, setCurrentOffsetItems] = useState([])
    useLayoutEffect(() => {
        const offsetitem  = data.slice(startItems, lastItems)
        setCurrentOffsetItems(offsetitem)
    }, [startItems])
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
        <div id="Products">
            <div className='product__container grid wide'>
                <div className="row">
                    <nav className="select_items">
                        <ul>
                            <li className="active" value = "all">Tất cả</li>
                            <li value = "laptop">laptop</li>
                            <li value = "monitor">Màn hình</li>
                            <li value = "graphiccard">Card đồ họa</li>
                        </ul>
                        <label htmlFor="sort" className="form-label">Sắp xếp theo</label>
                        <select id="sort" name="sort" onChange={(e) => {setSoftRule(e.target.value)}}>
                            <option value="default">--Mặc định--</option>
                            <option value="increase">Giá tăng dần</option>
                            <option value="decrease">Giá giảm dần</option>
                        </select>
                    </nav>
                    <ProductList 
                    onClickFavourite = {handleFavouriteItem}
                    onClickCart = {onClick}
                    data = {currentOffsetItems}
                    />
                    <div className="offset__bar">
                        <div className="prevbtn btn" onClick={handlePrevBtn}> prev</div>
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
                        <div className="nextbtn btn" onClick = {handleNextBtn}> next</div>
                    </div>
                </div>
            </div>
            <BottomBar 
            data = {dataFavouriteBar}
            className = 'favourite__bar'
            title = 'Danh mục sản phẩm yêu thích'
            /> 
        </div>
    )
}
export default Products