import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartList : [],
    listLength : 0,
    totalPrice : 0
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItem(state, action){
            console.log(action)
            state.listLength++
            const existingItem = state.cartList.find((cart) => {
                return cart.id === action.payload.id
            })
            if(!existingItem){
                console.log('additem')
                const newItem = {
                    ...action.payload,
                    count : 1,
                    total : Number(action.payload.price.split('.').join(''))
                }
                state.cartList =[newItem, ...state.cartList]     
                state.totalPrice += Number(action.payload.price.split('.').join(''))
            }else{    
                console.log('increase')
                existingItem.count++
                existingItem.total += Number(action.payload.price.split('.').join(''))
                state.totalPrice += Number(action.payload.price.split('.').join(''))
            } 
        },
        removeItem(state, action) {
            console.log(action.payload)
            const removeItem = state.cartList.find((cart) => {
                return cart.id === action.payload
            })
            state.cartList.splice( state.cartList.indexOf(removeItem), 1)
            state.totalPrice -= removeItem.total
            state.listLength -= removeItem.count
        },
        deleteItem(state, action) {
            const existingItem = state.cartList.find((cart) => {
                return cart.id === action.payload.id
            })
            existingItem.count--
            if( existingItem.count === 0) {
                state.cartList.splice(state.cartList.indexOf(existingItem), 1)
            }
            state.listLength--
            state.totalPrice -= Number(action.payload.price.split('.').join(''))
        }
    }
})
const {actions , reducer} = cartSlice
const cartReducer = reducer
export const {addItem, removeItem, deleteItem} = actions
export default cartReducer 