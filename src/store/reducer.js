const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        const newSate = JSON.parse(JSON.stringify(state));
        newSate.inputValue = action.value;
        return newSate;
    }
    if(action.type === 'add_item') {
        const newSate = JSON.parse(JSON.stringify(state));
        newSate.list.push(newSate.inputValue);
        newSate.inputValue = '';
        return newSate;
    }
    if(action.type === 'delete_item') {
        const newSate = JSON.parse(JSON.stringify(state));
        newSate.list.splice(action.index,1);
        return newSate;
    }
    return state;
}