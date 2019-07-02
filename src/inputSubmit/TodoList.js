import React, { Component } from 'react';
import store from '../store'; 
import TodoListUI from './TodoListUI';
import { getTodoList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from '../store/actionCreators';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);//当store改变时会自动触发该方法
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    )
  }
}

export default TodoList;
