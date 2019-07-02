import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';//连接store 它内部的组件都有了获取store的能力(把store提供给内部组件，内部组件都可以用store，又叫提供器，内部组件需要调用connect接收三个参数，前两个是连接的规则)
import store from './store';

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));