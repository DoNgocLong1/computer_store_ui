import { useEffect } from "react";
import React from "react";
import './header.css'
import SubMenu from "../SubMenu/SubMenu"
import Notification from "../Notification/Notification"
import {Link} from 'react-router-dom'
function Header() {
    
    useEffect(() => {
    
        const tabs = document.querySelectorAll('.tab')
        
        tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => {  
                const tabActive = document.querySelector('.tab.active')             
                tabActive.classList.remove('active')               
                e.target.classList.add('active')
                console.log('change tab')
            })
        })     
    },[])  
    const handleSubMenu = () => {   
        const notification = document.querySelector('#notification')
        const subMenu = document.querySelector('.submenu')   
        subMenu.classList.toggle('active')
        notification.classList.remove('active')
    }
    const handleNotification = () => {
        const notification = document.querySelector('#notification')
        const subMenu = document.querySelector('.submenu')      
        notification.classList.toggle('active')
        subMenu.classList.remove('active')
    } 
    return (
        <div className="header">
            <div className="header__top">
                <div className = "mobile__nav hide_on_pc show_on_mobile" >
                    <label htmlFor="nav-mobile-input"><i className="fa-solid fa-bars"></i></label>
                    <input type="checkbox" name="" className="nav__input" id="nav-mobile-input"  />          
                    <nav className="mobile_side_bar">
                        <label htmlFor="nav-mobile-input" className="close_btn">
                            <i className="fas fa-times close"></i>
                        </label>
                        <ul>
                            <img src="https://mb.cision.com/Public/11917/2068686/ba2c84a0d20797fa_org.png" className="nav_mobile_logo" alt="" />
                            <li><Link to="/" className="home">Trang chủ</Link></li>
                            <li><Link to="/Products" className="products">Sản phẩm</Link></li>
                            <li><Link to="/" className="contact">Liên hệ</Link></li>
                            <li><Link to="/" className="about">Giới thiệu</Link></li>
                            <li><Link to="/" className="about">Đăng xuất</Link></li>
                            <li><Link to="/" className="about">Đăng ký</Link></li>

                        </ul>
                    </nav>
                    <label htmlFor="nav-mobile-input" className="overlay"></label>
                </div>
                <div className="header__top__logo">
                    <a href="./">
                        <img src="https://mb.cision.com/Public/11917/2068686/ba2c84a0d20797fa_org.png" alt="" />
                    </a>
                </div>
                <nav className="header__top__navbar hide_on_mobile">
                    <ul className="navbar_container">
                        <li className="home">
                            <Link to ="/" className="tab active">Trang chủ</Link>
                        </li>
                        <li className="product">
                            <Link to ="/Products" className=" tab">Sản phẩm</Link>
                        </li>
                        <li className="contact">
                            <Link to ="/Contact" className=" tab">Liên hệ</Link>
                        </li>
                        <li className="about">
                            <Link to ="/" className=" tab ">Giới thiệu</Link>
                        </li>             
                    </ul> 
                </nav>                          
                <div className="header__top__user">
                    <div className="notification" onClick={handleNotification}>
                        <i className="fa-solid fa-bell"></i>
                        <span>2</span>
                    </div>
                    <Notification/>
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