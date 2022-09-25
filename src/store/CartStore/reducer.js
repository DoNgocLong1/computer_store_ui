import {SET_ITEM, DELETE_ITEM, REMOVE_ITEM} from './action'
const initState = {
    cartList : [],
    listLength : 0,
    totalPrice : 0
}
function reducer(state, action) {
    let newItemList = [...state.cartList]
    switch(action.type){       
        case SET_ITEM:
            state.listLength++
            const existingItem = state.cartList.find((item) => {
                return item.id === action.payload.id
            })
            if(!existingItem){
                console.log('additem')
                action.payload.count = 1
                newItemList =[action.payload, ...state.cartList]     
                state.totalPrice += Number(action.payload.price.split('.').join(''))
            }else{    
                console.log('increase')
                existingItem.count++
                state.totalPrice += Number(action.payload.price.split('.').join(''))
            }  
            return  {
                ...state,
                cartList:newItemList
            }
        case REMOVE_ITEM:   
        console.log(action.payload)   
            newItemList.splice(state.cartList.indexOf(action.payload), 1)
            state.totalPrice -= Number((action.payload.price.split('.').join('')) * action.payload.count)
            state.listLength -= action.payload.count
            return  {
                ...state,
                cartList:newItemList
            }
        case DELETE_ITEM:
            action.payload.count--
            if(action.payload.count === 0) {
                newItemList.splice(state.cartList.indexOf(action.payload), 1)
            }
            state.listLength--
            state.totalPrice -= Number(action.payload.price.split('.').join(''))
            return  {
                ...state,
                cartList:newItemList
            }
        default :
        throw new console.error('error'); 
    }
}
export {initState}
export default reducer