import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, ADD_LIST_ITEM } from './actionTypes';

// state指的是整个的信息,就是之前的信息
const defaultState = {
    inputValue: '',
    list: []
}

// state指的是整个的信息,就是之前的信息，action是新的信息
// reducer 可以接受state，但是绝不能修改state
export default (state = defaultState, action) => {  
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    };
    if(action.type === ADD_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}