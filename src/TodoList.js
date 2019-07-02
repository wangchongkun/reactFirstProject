import React from 'react';
import { connect } from 'react-redux';//todolist和store做链接，通过mapStateToProps

//无状态组件：无任何生命周期和逻辑处理
const TodoList = (props) => {
    const {inputValue, list, changeInputValue, handleClick, handleDelete} = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index) => {
                        return <li key={index} onClick={() => handleDelete(index)}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

//映射数据state
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

//store.dispatch, 映射到props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action)
        },

        handleClick(){
            const action = {
                type: 'add_item',
            };
            dispatch(action)
        },

        handleDelete(index){
            const action = {
                type: 'delete_item',
                index
            };
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);