import {SET_ITEM, DELETE_ITEM} from './action'
const initState = {
    cartItems : [],
    listLength : 0,
    totalPrice : 0
} 
function reducer(state, action) {
    let newItemList = [...state.cartItems]
    switch(action.type){       
        case SET_ITEM:
            state.listLength++
            const existingItem = state.cartItems.find((item,index) => {
                return item.id === action.payload.id
            })
            if(!existingItem){
                console.log('additem')
                action.payload.count = 1
                newItemList =[action.payload, ...state.cartItems]     
                state.totalPrice += Number(action.payload.price.split('.').join(''))
            }else{    
                console.log('increase')
                existingItem.count++
                state.totalPrice += Number(action.payload.price.split('.').join(''))
            }  
            return  {
                ...state,
                cartItems:newItemList
            }
        case DELETE_ITEM:     
            newItemList.splice(action.payload, 1)
            state.totalPrice -= Number(state.cartItems[action.payload].price.split('.').join(''))
            state.listLength--
            return  {
                ...state,
                cartItems:newItemList
            }
        default :
        throw new console.error('error'); 
    }
}
export {initState}
export default reducer