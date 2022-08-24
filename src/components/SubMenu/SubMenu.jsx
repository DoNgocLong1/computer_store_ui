import React from "react";
import './SubMenu.css'
function SubMenu () {
    const handleChangeTheme = () => {
        document.body.classList.toggle('dark_theme')
    }
    return (
        <div className="submenu">
            <div className="user__info">
                <div className="user__info__img">
                    <img src="https://i.pinimg.com/originals/19/d4/26/19d426a4ec158169e12675f014f51f5d.png" alt="" />
                </div>
                <div className="user__info__content">
                    <h1> Đỗ Ngọc Long</h1>
                    <p>dongoclong101001@gmail.com</p>
                </div>
            </div>
            <ul >
                <li><i className ="fa-solid fa-arrow-up-right-from-square"></i><span>Đóng góp ý kiến</span></li>
                <li onClick={handleChangeTheme}><i className ="fa-solid fa-palette"></i> <span>Giao diện</span> <i className="fa-solid fa-angle-right change"></i> </li>               
                <li><i className ="fa-solid fa-location-dot"></i><span>Địa điểm: Việt Nam</span> <i className="fa-solid fa-angle-right change"></i></li>
                <li><i className ="fa-solid fa-earth-asia"></i><span>Ngôn ngữ</span> <i className="fa-solid fa-angle-right change"></i></li>
                <li><i className ="fa-solid fa-right-from-bracket"></i><span>Đăng xuất</span></li>
            </ul>
        </div>
    )
}
export default SubMenu