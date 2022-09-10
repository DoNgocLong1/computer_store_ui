
import '../../data/products/graphicsCard'
import '../../data/products/computers'
// lấy dữ liệu computer từ localStorage
const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';
const computers = JSON.parse(localStorage.getItem(COMPUTER_STORAGE_KEY) || [])
const CARD_STORAGE_KEY = 'VIK_CARD'
const graphicsCard = JSON.parse(localStorage.getItem(CARD_STORAGE_KEY) || [])
const storageCart = JSON.parse(localStorage.getItem('CART_LIST') || localStorage.setItem('CART_LIST', JSON.stringify([]))) 
const productList = [...computers, ...graphicsCard]
const cart = productList.filter((item) => { 
    return storageCart.includes(item.id)
})
const showBottomBar = () => {
    const bottomBar = document.querySelector('.bottom__bar.cart__bar')
    bottomBar.classList.add('show')
}
const closeBottomBar = () => {
    const bottomBar = document.querySelector('.bottom__bar.cart__bar')
    bottomBar.classList.remove('show')
}
export {cart as cartData} 
export {closeBottomBar as close} 
export {showBottomBar as show} 
export {graphicsCard} 
export {computers} 
