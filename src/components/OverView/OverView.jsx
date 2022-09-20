import React from "react";
import './OverView.css'
import OverViewContent from "./OverViewContent";
const helio = JSON.parse(localStorage.getItem('HELIO') || [])
const triton = JSON.parse(localStorage.getItem('TRITON') || [])
const orion = JSON.parse(localStorage.getItem('ORION') || [])
const monitor = JSON.parse(localStorage.getItem('MONITOR') || [])
const gear = JSON.parse(localStorage.getItem('GEAR') || [])
function OverView() {
    return (
        <div className="overview">
            
            <OverViewContent
            data = {helio}
            className = 'helio'
            title = 'HELIOS'
            content = 'Lớn hơn, mạnh hơn và có nhiều năng lượng để dự phòng. Giải quyết mọi trò chơi với Helios ở phía sau của bạn.'
            />
            <OverViewContent
            data = {triton}
            className = 'triton'
            title = 'TRITON'
            content = 'Chơi ở bất cứ đâu bạn muốn, với máy tính xách tay mỏng hơn được trang bị phần cứng mới nhất.'
            />
            <OverViewContent
            data = {orion}
            className = 'orion'
            title = 'ORION'
            content = 'Bên trong bộ khung, một con quái vật đang chờ đợi. Đẩy mọi thứ lên mức tối đa.'
            />
            <OverViewContent
            data = {monitor}
            className = 'monitor'
            title = 'MONITOR'
            content = 'Màn hình trò chơi của bạn phải là màn hình tốt nhất, cho dù là màn hình cong, phẳng, 4K hay FHD.'
            />
            <OverViewContent
            data = {gear}
            className = 'gear'
            title = 'GADGETS và GEAR'
            content = 'Trang bị cho thiết lập của bạn với chuột siêu nhạy, bàn phím cơ, tai nghe giàu âm thanh và ghế chơi game thoải mái.'
            />
        </div>
    )
}
export default OverView