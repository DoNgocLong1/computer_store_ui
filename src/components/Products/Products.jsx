import { useState} from "react";
import './Products.css'
import GraphicsCard from'../GraphicsCard/GraphicsCard'
import Computers from'../Computers/Computers'
import FavouriteBar from "../FavouriteBar/FavouriteBar";
function Products() {
    // lấy dữ liệu computer từ localStorage
    const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';
    const computers = JSON.parse(localStorage.getItem(COMPUTER_STORAGE_KEY)|| [])

    //lấy dữ liệu các sản phẩm ưu thích từ LocalStorage
    const storageFavourite = JSON.parse(localStorage.getItem('FAVOURITE_LIST'))

    //set State cho component là 1 mảng gồm các id sản phẩm ưu thích
    const [favouriteList, setFavouriteList] = useState([storageFavourite])

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
    }
    console.log(favouriteList)
    return (
        <div id="Products">
            <div className='product__container grid wide'>
                <div className="row">
                    <GraphicsCard/>
                    <Computers onClick = {handleFavouriteItem}/>
                </div>
            </div>
            <div className="bottom__bar favourite__bar">
                <div className="bottom__bar__header">
                    <h1>Danh mục sản phẩm yêu thích</h1>
                    <i className="fa-solid fa-xmark"></i>
                </div>


                <FavouriteBar data = {checklist}/>
            </div>        
        </div>
    )
}
export default Products