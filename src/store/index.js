import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './saga';

//compose来自于redux

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    //   typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;//window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()是浏览器的redux的插件

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore( reducer,enhancer);//redux的中间件

sagaMiddleware.run(todoSagas);

export default store;