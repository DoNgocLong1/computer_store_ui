export const SET_ITEM = 'set_item'
export const DELETE_ITEM = 'delete_item'
export const addItem = payload => ({
    type: SET_ITEM,
    payload
})
export const deleteItem = payload => ({
    type: DELETE_ITEM,
    payload
})
