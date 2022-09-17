import { createContext, } from "react";
const Context = createContext()
function Provider({children}) {
    const storageCart = JSON.parse(localStorage.getItem('CART_LIST') || localStorage.setItem('CART_LIST', JSON.stringify([]))) 
    return(
        <Context.Provider value = {storageCart} >
            {children}
        </Context.Provider>
    )   
}
export default Provider
export {Context}
