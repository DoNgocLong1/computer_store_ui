import { useState, useEffect} from "react";
import './Products.css'
import ProductList from'../ProductList/ProductList'
import BottomBar from "../BottomBar/BottomBar";
import '../../data/products/graphicsCard'
import '../../data/products/computers'
import {graphicsCard, computers} from './ProductData'
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
    const productList = [...computers, ...graphicsCard]
    useEffect(() => {
        const bottomBar = document.querySelector('.bottom__bar.favourite__bar')
        const closeBottomBar = document.querySelector('.bottom__bar.favourite__bar .closebar')   
        favouriteBar ? bottomBar.classList.add('show') : bottomBar.classList.remove('show')
        closeBottomBar.addEventListener('click', () => {
            bottomBar.classList.remove('show')
        })
        const items = productList.filter((item) => {
            return storageFavourite.includes(item.id)
        })
        setDataFavouriteBar(items)
        return () => {
            closeBottomBar.removeEventListener('click', () => {
                bottomBar.classList.remove('show')
            })
        }
    },[favouriteList])
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
                            <li className="active">Tất cả</li>
                            <li>laptop</li>
                            <li>Màn hình</li>
                            <li>Card đồ họa</li>
                        </ul>
                        <label for="sort" class="form-label">Sắp xếp theo</label>
                        <select id="sort" name="sort">
                            <option value="">--Mặc định--</option>
                            <option value="increase">Giá tăng dần</option>
                            <option value="decrease">Giá giảm dần</option>
                        </select>
                    </nav>
                    <ProductList 
                    onClickFavourite = {handleFavouriteItem}
                    onClickCart = {onClick}
                    data = {graphicsCard}
                    />
                    <ProductList 
                    onClickFavourite = {handleFavouriteItem}
                    onClickCart = {onClick}
                    data = {computers}
                    />
                </div>
            </div> {
            }
            <BottomBar 
            data = {dataFavouriteBar}
            className = 'favourite__bar'
            title = 'Danh mục sản phẩm yêu thích'
            /> 
        </div>
    )
}
export default Products