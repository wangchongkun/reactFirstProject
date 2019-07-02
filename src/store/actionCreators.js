import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, ADD_LIST_ITEM } from './actionTypes';
import axios from 'axios';

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

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist.json')
            .then((res) => {
                const data = res.data;  
                const action = getAddList(data);
                dispatch(action);
            })
            .catch(() => { alert('error') })
    }
}
