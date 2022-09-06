import { useState, useEffect} from "react";
import './Products.css'
import GraphicsCard from'../GraphicsCard/GraphicsCard'
import Computers from'../Computers/Computers'
import FavouriteBar from "../FavouriteBar/FavouriteBar";
function Products() {
    // lấy dữ liệu computer từ localStorage
    const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';
    const computers = JSON.parse(localStorage.getItem(COMPUTER_STORAGE_KEY) || [])
    const CARD_STORAGE_KEY = 'VIK_CARD'
    const graphicsCard = JSON.parse(localStorage.getItem(CARD_STORAGE_KEY) || [])
    //lấy dữ liệu các sản phẩm ưu thích từ LocalStorage nếu chưa có FAVOURITE_LIST trong LocalStorage thì khởi tạo FAVOURITE_LIST rỗng
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST') || localStorage.setItem('FAVOURITE_LIST', JSON.stringify([]))) 
    //set State cho component là 1 mảng gồm các id sản phẩm ưu thích
    const [favouriteList, setFavouriteList] = useState([storageFavourite])
    const [favouriteBar, setFavouriteBar] = useState(false)
    const [dataFavouriteBar, setdataFavouriteBar] = useState([])

    const productList = [...computers, ...graphicsCard]
    //xử lý ẩn hiện danh mục yêu thích
    useEffect(() => {
        const bottomBar = document.querySelector('.bottom__bar')
        const closeBottomBar = document.querySelector('.bottom__bar .closebar')   
        favouriteBar ? bottomBar.classList.add('show') : bottomBar.classList.remove('show')
        closeBottomBar.addEventListener('click', () => {
            bottomBar.classList.remove('show')
        })
        const items = productList.filter((item) => {
            return favouriteList.includes(item.id)
        })
        setdataFavouriteBar(items)
        return () => {
            closeBottomBar.removeEventListener('click', () => {
                bottomBar.classList.remove('show')
            })
        }
    },[favouriteList])
    //lọc ra các id sản phẩm được yêu thích trong kho computers

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
        const newFavouriteList = favouriteItem
        const jsonFavourite = JSON.stringify(newFavouriteList)
        localStorage.setItem('FAVOURITE_LIST', jsonFavourite)
    }
    return (
        <div id="Products">
            <div className='product__container grid wide'>
                <div className="row">
                    <GraphicsCard 
                    onClick = {handleFavouriteItem}
                    />
                    <Computers 
                    onClick = {handleFavouriteItem}
                    />
                </div>
            </div> {
            }
            <FavouriteBar data = {dataFavouriteBar}/> 
        </div>
    )
}
export default Products