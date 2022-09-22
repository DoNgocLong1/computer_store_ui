import {SET_ITEM, DELETE_ITEM} from './action'
const initState = {
    cartItems : [],
    listLength : 0,
    totalCost : 0
} 
function reducer(state, action) {
    let newItemList = [...state.cartItems]
    switch(action.type){       
        case SET_ITEM:
            let indexItem 
            const existingItem = state.cartItems.find((item,index) => {
                indexItem = index
                return item.id === action.payload.id
            })
            if(!existingItem){
                console.log('additem')
                action.payload.count = 1
                newItemList =[action.payload, ...state.cartItems]
                state.listLength++
                state.totalCost += Number(action.payload.price.split('.').join(''))
            }else{    
                console.log('increase')
                const newItem = {
                    ...action.payload,
                    count: existingItem.count++
                }
                state.totalCost += Number(action.payload.price.split('.').join(''))
                newItemList.splice(indexItem,1,newItem)
            }  
            console.log(indexItem )
            return  {
                ...state,
                cartItems:newItemList
            }
        case DELETE_ITEM:     
            newItemList.splice(action.payload, 1)
            state.totalCost -= Number(state.cartItems[action.payload].price.split('.').join(''))
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