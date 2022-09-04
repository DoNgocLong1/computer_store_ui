import { useState, useEffect} from "react";
import './Products.css'
import GraphicsCard from'../GraphicsCard/GraphicsCard'
import Computers from'../Computers/Computers'
import FavouriteBar from "../FavouriteBar/FavouriteBar";
function Products() {
    /* const jsonFavourite = useRef() */
    // lấy dữ liệu computer từ localStorage
    const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';
    const computers = JSON.parse(localStorage.getItem(COMPUTER_STORAGE_KEY) || [])
    const CARD_STORAGE_KEY = 'VIK_CARD'
    const graphicsCard = JSON.parse(localStorage.getItem(CARD_STORAGE_KEY) || [])
    //lấy dữ liệu các sản phẩm ưu thích từ LocalStorage nếu chưa có FAVOURITE_LIST trong LocalStorage thì khởi tạo FAVOURITE_LIST rỗng
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST') || localStorage.setItem('FAVOURITE_LIST', JSON.stringify([]))) 
    console.log(storageFavourite)
    //set State cho component là 1 mảng gồm các id sản phẩm ưu thích
    const [favouriteList, setFavouriteList] = useState([storageFavourite])
    //xử lý ẩn hiện danh mục yêu thích
    useEffect(() => {
        const favouriteList = Array.from(document.querySelectorAll('.fa-heart'))
        console.log(favouriteList)
        
        const animation = document.querySelector('.bottom__bar')
        const closeAnimation = document.querySelector('.bottom__bar .closebar')
        animation.classList.add('show')   
        closeAnimation.addEventListener('click', (e) => {
            console.log(e.target)
            animation.classList.remove('show')
        })
    },[favouriteList])
    //lọc ra các id sản phẩm được yêu thích trong kho computers
    const computerList = computers.filter((item) => {
        return storageFavourite.includes(item.id)
    })
    console.log(computerList)
    const graphicsCardList = graphicsCard.filter((item) => {
        return storageFavourite.includes(item.id)
    })
    console.log(graphicsCardList)
    const checkList = [...computerList, ...graphicsCardList]
    //hàm xử lý thêm và bỏ yêu thích
    const handleFavouriteItem = (name) => {
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
        console.log(favouriteItem)
    }
    console.log(checkList)
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
            <FavouriteBar data = {checkList}/> 
        </div>
    )
}
export default Products