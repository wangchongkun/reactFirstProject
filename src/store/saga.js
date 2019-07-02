import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { getAddList } from './actionCreators';
import axios from 'axios';

//generator 函数
function* getInitList() {
    try {
        const res = yield axios.get('/api/todolist.json');
        const action = getAddList(res.data);
        yield put(action);
    } catch (e) {
        console.log('网络请求失败');
    }
}

function* mySaga() {
    //捕捉每一个action的类型
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;