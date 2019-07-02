import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, ADD_LIST_ITEM, GET_INIT_LIST } from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const getAddList = (data) => ({
    type: ADD_LIST_ITEM,
    data
})

export const getInitList = () => ({
    type: GET_INIT_LIST
})