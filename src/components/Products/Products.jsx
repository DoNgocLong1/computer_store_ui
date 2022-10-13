import { useState, useEffect} from "react";
import './Products.css'
import ProductList from'../ProductList/ProductList'
/* import BottomBar from "../BottomBar/BottomBar"; */
import products from '../../data/products/products'
function Products({onClick}) {
    //--------phần lấy dữ liệu và set state cho danh mục yêu thích --------- 
    //lấy dữ liệu các sản phẩm ưu thích từ LocalStorage nếu chưa có FAVOURITE_LIST trong LocalStorage thì khởi tạo FAVOURITE_LIST rỗng
    /* const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST') || localStorage.setItem('FAVOURITE_LIST', JSON.stringify([])))  */
    //set State favouriteList là 1 mảng gồm các id sản phẩm ưu thích
/*     const [favouriteList, setFavouriteList] = useState([storageFavourite])
    //set State favouriteBar để ẩn hiện favouriteBar
    const [favouriteBar, setFavouriteBar] = useState(false)
    //set State dataFavouriteBar để đổ dữ liệu vào favouriteBar
    const [dataFavouriteBar, setDataFavouriteBar] = useState([]) */
    const [softRule, setSoftRule] = useState('default')
    const [softItem, setSoftItem] = useState('all')
/*     useEffect(() => {
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
    },[favouriteList]) */


    //xử lý chuyển tab sản phẩm

    let copyItem = [...products]
    let offsetBarLength = Math.ceil(copyItem / 15) 
    let rows = []
 /*    const handleNextBtn = () => {
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
    } */
    //xử lý sắp xếp sản phẩm
    const handleIncreseSoft = (arr) => {
        
        console.log('soft')
        arr.sort((prevItem, nextItem) => {
        return prevItem.price.split('.').join('') - nextItem.price.split('.').join('')
        })
        return arr
    }
    const handleDecreseSoft = (arr) => {
        
        console.log('soft')
        arr.sort((prevItem, nextItem) => {
        return nextItem.price.split('.').join('') - prevItem.price.split('.').join('')
        })
        return arr
    }

   
    
    let sortData
    switch(softItem) {
        case 'laptop' :
            sortData = copyItem.filter((item) => {
                return item.type === 'laptop'
            })
            /* offsetBarLength = Math.ceil(sortData.length / 15)    */ 
            break;
        case 'monitor' :
            sortData = copyItem.filter((item) => {
                return item.type === 'monitor'
            })
            /* offsetBarLength = Math.ceil(sortData.length / 15)  */  
            break;
        case 'graphiccard' :
            sortData = copyItem.filter((item) => {
                return item.type === 'graphicCard'
            })
            
            break;
        case 'all' :
            sortData =  copyItem
            break;
        default:
            break;
    }

    let data
    switch(softRule) {
        case 'increase' :
            /* softItem === 'all' ?
            sortData = handleIncreseSoft(products): */
            data = handleIncreseSoft(sortData)     
            break;
        case 'decrease' :
            /* softItem === 'all' ?
            data = handleDecreseSoft(sortData): */
            data = handleDecreseSoft(sortData)           
            break;
        default:
            data = sortData
            break;
    }
    useEffect(() => {
        const tabs = document.querySelectorAll('.select_items li')   
        tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => {  
                const tabActive = document.querySelector('.select_items li.active')             
                tabActive.classList.remove('active')               
                e.target.classList.add('active')
                setSoftItem( e.target.getAttribute('value'))
            })
        })
    }, [])
    
     
    
    
    //hàm xử lý thêm và bỏ yêu thích
 /*    const handleFavouriteItem = (name) => {
        setFavouriteBar(true)
        //thêm sản phẩm yêu thích vào mảng favouriteList
        setFavouriteList(prev => [name, ...prev])
        // xử lý khi bỏ thích một sản phẩm
        const favo = Array.from(document.querySelectorAll('.favourite__action .active'))
        const favouriteItem = favo.map((item) => {
            return item.getAttribute('favouritekey') || []
        })
        setFavouriteList(favouriteItem)
        // lưu danh sách yêu thích vào LocalStorage
        const jsonFavourite = JSON.stringify(favouriteItem)
        localStorage.setItem('FAVOURITE_LIST', jsonFavourite)
    } */
    for( let i = 0; i<offsetBarLength; i++ ) {
        rows.push(i)
    }
    console.log(data)
    return (
        <div id="Products">
            <div className="products__img">
                <img src="https://static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181227/design_large.jpg" alt="" />
            </div>
            <div className='product__container grid wide'>
                <div className="row">
                    <nav className="select_items">
                        <ul>
                            <li className="active" value = "all">All</li>
                            <li value = "laptop">Laptop</li>
                            <li value = "monitor">Monitor</li>
                            <li value = "graphiccard">Graphic Card</li>
                        </ul>
                        <div className="select_soft">
                            <label htmlFor="sort" className="form-label">Sort by</label>
                            <select id="sort" name="sort" onChange={(e) => {setSoftRule(e.target.value)}}>
                                <option value="default">--Default--</option>
                                <option value="increase">Increase price</option>
                                <option value="decrease">Decrease price</option>
                            </select>
                        </div>
                    </nav>
                    <ProductList 
                    /* onClickFavourite = {handleFavouriteItem} */
                    data = {data}
                    />
                 
                </div>
            </div>
            {/* <BottomBar 
            data = {dataFavouriteBar}
            className = 'favourite__bar'
            title = 'Danh mục sản phẩm yêu thích'
            />  */}
        </div>
    )
}
export default Products