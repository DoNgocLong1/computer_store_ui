import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
import './MobileNavBar.css'
function MobileNavBar() {
    useEffect(() => {
        console.log(document.querySelectorAll('.mobile_side_bar ul li'))
        document.querySelectorAll('.mobile_side_bar ul li').forEach((item) => {
            item.addEventListener('click', () => {
                console.log('clicked')
                document.getElementById('nav-mobile-input').checked = false
            })
        })
    })
    return (
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
    )
}
export default MobileNavBar