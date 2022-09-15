import { useState, useEffect} from "react";
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


    //xử lý chuyển tab sản phẩm
    let data = products
    let offsetBarLength = Math.ceil(products.length / 15) 
    let rows = []
    for( let i = 0; i<offsetBarLength; i++ ) {
        rows.push(i)
    }
    const [startItems, setStartItems] = useState(0)
    const [lastItems, setLastItems] = useState(15)
    const [currentOffsetItems, setCurrentOffsetItems] = useState([])
    useEffect(() => {
        const offsetitem  = products.slice(startItems, lastItems)
        setCurrentOffsetItems(offsetitem)
    }, [startItems])
    const handleNextBtn = () => {
        if(lastItems < products.length){
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
    //xử lý sắp xếp sản phẩm
    const handleIncreseSoft = (arr) => {
        arr.sort((prevItem, nextItem) => {
        return prevItem.price.split('.').join('') - nextItem.price.split('.').join('')
        })
        return arr
    }
    const handleDecreseSoft = (arr) => {
        arr.sort((prevItem, nextItem) => {
        return nextItem.price.split('.').join('') - prevItem.price.split('.').join('')
        })
        return arr
    }
    switch(softRule) {
        case 'increase' :
            softItem === 'all' ?
            handleIncreseSoft(currentOffsetItems):
            handleIncreseSoft(data)         
            break;
        case 'decrease' :
            softItem === 'all' ?
            handleDecreseSoft(currentOffsetItems):
            handleDecreseSoft(data)           
            break;
        default:
            data = currentOffsetItems
            break;
    }
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
            offsetBarLength = Math.ceil(data.length / 15)    
            break;
        case 'monitor' :
            data = products.filter((item) => {
                return item.type === 'monitor'
            })
            offsetBarLength = Math.ceil(data.length / 15)   
            break;
        case 'graphiccard' :
            data = products.filter((item) => {
                return item.type === 'graphicCard'
            })
            
            break;
        case 'all' :
            data = currentOffsetItems
            break;
        default:
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
                    data = {data}
                    />
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