import React, { Component } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import {Globalstyle} from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Globalstyle />
                <IconfontStyle />
                <Header />
            </Provider>
        )
    }
}

export default App;