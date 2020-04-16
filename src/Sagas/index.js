import { put, takeEvery } from 'redux-saga/effects';
import { ADD_FORM, UPDATE_FORM, DELETE_DATA } from '../actions/type'


export function* watcherSaga() {
    yield takeEvery( ADD_FORM, asyncADD);
    yield takeEvery( UPDATE_FORM, asyncUPDATE);
    yield takeEvery( DELETE_DATA, asyncDELETE);
}

export function* asyncUPDATE(data) {
    yield put({ type: "UPDATE_ASYNC_DATA", payload:data.payload})
}
export function* asyncDELETE(data) {
    yield put ({ type: "DELETE_ASYNC_DATA", data})
}

export function* asyncADD(data){
    yield put({ type: "ADD_ASYNC_DATA", payload:data.payload})
}
