import { call, all, takeLatest, put } from 'redux-saga/effects';
import { getCurrentUser, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { USER_ACTION_TYPE } from './user.types';
import { signInSuccess, signInFailed } from './user.actions'


export function* isUserAuthenticated(){
    try {
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) return;
    } catch (error) {
        
    }
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION)
}

export function* userSagas(){
    yield all([])
}