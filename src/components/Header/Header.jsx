import React from "react";
import { useEffect } from "react";
import './header.css'
import SubMenu from "../SubMenu/SubMenu";
import {Link} from 'react-router-dom'
function Header() {
    const theme = 'dark_theme'
    document.body.classList.add(theme)
    useEffect(() => {
        
    } ,[])
    const handleSubMenu = () => {
        const subMenu = document.querySelector('.submenu')
        subMenu.classList.toggle('active')
    }
    return (
        <div className="header">
            <div className="header__top">
            <div className="header__top__logo">
                    <a href="./">
                        <img src="https://mb.cision.com/Public/11917/2068686/ba2c84a0d20797fa_org.png" alt="" />
                    </a>
                </div>
                <div className="header__top__navbar">
                    <Link to ="/" className="home">Trang chủ</Link>
                    <Link to ="/Products" className="product">Sản phẩm</Link>
                    <Link to ="/Contact" className="contact">Liên hệ</Link>
                    <Link to ="/" className="about us">Giới thiệu</Link>
                </div>               
                <div className="header__top__user">
                    <div className="user" onClick={() => handleSubMenu()}>
                        <img src="https://i.pinimg.com/originals/19/d4/26/19d426a4ec158169e12675f014f51f5d.png" alt="" />
                       {/* seting */}                       
                    </div>  
                    <SubMenu/>      
                </div>
            </div>
        </div>
    )
}
export default Header