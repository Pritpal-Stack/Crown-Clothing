import { call, all, takeLatest, put } from 'redux-saga/effects';
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { USER_ACTION_TYPE } from './user.types';
import { signInSuccess, signInFailed } from './user.actions'

export function* getSnapshotFromUserAuth(useAuth, additonalDetails){
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, useAuth, additonalDetails); 
        put(signInSuccess({ id: userSnapshot.id,  ...userSnapshot.data() }))
    } catch (error) {
        put(signInFailed(error));
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) return;
        yield(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        put(signInFailed(error));
        
    }
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* SignInWithGoogle(){
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        put(signInFailed(error));
    }
}


export function* OnGoogleSignInStart(){
    yield takeLatest( USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, SignInWithGoogle )
}


export function* userSagas(){
    yield all([ call(onCheckUserSession) ])
}