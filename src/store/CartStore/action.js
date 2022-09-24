export const SET_ITEM = 'set_item'
export const DELETE_ITEM = 'delete_item'
export const REMOVE_ITEM = 'remove_item'
export const addItem = payload => ({
    type: SET_ITEM,
    payload
})
export const deleteItem = payload => ({
    type: DELETE_ITEM,
    payload
})
export const removeItem = payload => ({
    type: REMOVE_ITEM,
    payload
})

