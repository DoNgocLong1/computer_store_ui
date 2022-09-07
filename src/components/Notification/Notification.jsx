import React from "react";
import './Notification.css'
import '../../data/notification'
function Notification() {
    const notifications = JSON.parse(localStorage.getItem('NOTIFICATION') || []) 
    return (
        <div id="notification">
            <h2>
                Thông báo
            </h2>
                <div className="notification__new">
                <h1>Mới</h1>
                {notifications.map((item, index) => (
                <div key={`${index}-new`}>
                {item.isNew && <div  className="notification__item">
                    <div className="notification__img">
                        <img src={item.image} alt = ""/>
                    </div>
                    <div className="notification__detail">
                        <div className="notification__content">
                            <p><span>{item.name}</span>{item.content}</p>
                        </div>            
                    </div>
                </div>}
                </div>
            ))}
            </div> 
            <div className="notification__older">
            <h1>Trước đó</h1>
                {notifications.map((item, index) => (
                    <div key={index}>
                    {!item.isNew && <div  className="notification__item">
                        <div className="notification__img">
                            <img src={item.image} alt = ""/>
                        </div>
                        <div className="notification__detail">
                            <div className="notification__content">
                                <p><span>{item.name}</span>{item.content}</p>
                            </div>            
                        </div>
                    </div>}
                    </div>
                ))}           
           </div>
        </div>
    )
}
export default Notification