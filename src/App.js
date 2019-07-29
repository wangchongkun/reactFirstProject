import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import { Globalstyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont.js';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Globalstyle />
                    <IconfontStyle />
                    <Header />
                    <BrowserRouter>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail' exact component={Detail}></Route>
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
}

export default App;