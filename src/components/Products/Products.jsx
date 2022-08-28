import { useState, useEffect, useRef} from "react";
import './Products.css'
import GraphicsCard from'../GraphicsCard/GraphicsCard'
import Computers from'../Computers/Computers'
import FavouriteBar from "../FavouriteBar/FavouriteBar";
function Products() {
    /* const jsonFavourite = useRef() */
    // lấy dữ liệu computer từ localStorage
    const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';
    const computers = JSON.parse(localStorage.getItem(COMPUTER_STORAGE_KEY) || [])
    //lấy dữ liệu các sản phẩm ưu thích từ LocalStorage nếu chưa có FAVOURITE_LIST trong LocalStorage thì khởi tạo FAVOURITE_LIST rỗng
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST') || localStorage.setItem('FAVOURITE_LIST', JSON.stringify([]))) 
    console.log(storageFavourite)
    //set State cho component là 1 mảng gồm các id sản phẩm ưu thích
    const [favouriteList, setFavouriteList] = useState([storageFavourite])

    //xử lý ẩn hiện danh mục yêu thích
    const killAnimation = useRef()
    useEffect(() => {
        let duration = 0.5
        let delay = 5
        let fateOut = 1
        let clearTime = duration + delay + fateOut
        const animation = document.querySelector('.bottom__bar')
        animation.style.removeProperty('transform')
        animation.style.animation = `slideInLeft ease ${duration}s, fadeOut linear ${fateOut}s ${delay}s forwards`
        killAnimation.current =  setTimeout(() => {
            animation.style.transform = 'translateY(100%)'
            animation.style.removeProperty('animation')
            console.log('clear animation')
        },clearTime*1000)
        return () => {
            clearTimeout(killAnimation.current)
        }                      
    },[favouriteList])
    //lọc ra các id sản phẩm được yêu thích trong kho computers
    const checklist = computers.filter((item) => {
        return storageFavourite.includes(item.id) 
    })
    //hàm xử lý thêm và bỏ yêu thích
    const handleFavouriteItem = (name) => {
        //thêm sản phẩm yêu thích vào mảng favouriteList
        setFavouriteList(prev => [...prev, name])
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
    return (
        <div id="Products">
            <div className='product__container grid wide'>
                <div className="row">
                    <GraphicsCard/>
                    <Computers onClick = {handleFavouriteItem}/>
                </div>
            </div> {

            }
            <FavouriteBar data = {checklist}/> 
        </div>
    )
}
export default Products