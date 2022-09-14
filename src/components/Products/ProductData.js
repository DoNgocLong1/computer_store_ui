const showBottomBar = () => {
    const bottomBar = document.querySelector('.bottom__bar.cart__bar')
    bottomBar.classList.add('show')
}
const closeBottomBar = () => {
    const bottomBar = document.querySelector('.bottom__bar.cart__bar')
    bottomBar.classList.remove('show')
}
/* export {cart as cartData}  */
export {closeBottomBar as close} 
export {showBottomBar as show} 